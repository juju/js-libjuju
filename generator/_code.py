# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Definitions for JavaScript code entities, like methods and types."""

from collections import namedtuple
from contextlib import contextmanager


class Method(namedtuple('Method', 'request params result doc')):
    """A single API method as exposed by a facade.

    The request is the name of the Juju request sent by this method.
    Provided params and result are two instances of Type.
    The doc holds the documentation for the method.
    """

    __slots__ = ()

    def name(self):
        """Return the method name."""
        return uncapitalize(self.request)


class Type(namedtuple('Type', 'name kind ref required')):
    """A representation of the type of a JavaScript value.

    The name holds an optional variable name representing a value of this type.
    The kind groups different types together, like all maps, all slices, all
    structs, all basic types, etc.
    The ref, if present, is a string pointing to where this type is defined in
    the Juju sources.
    """

    __slots__ = ()

    def __str__(self):
        name = self.name + ': ' if self.name else ''
        return name + str(self.kind)

    def docstring(self):
        """Return a docstring for this type."""
        indent, level = '  ', 0
        parts = []
        for char in str(self):
            if char == '{':
                level += 1
                parts.extend(['{\n', indent * level])
                continue
            if char == '}':
                level -= 1
                parts.extend(['\n', indent * level, '}'])
                continue
            if char == ',':
                parts.extend([',\n', indent * level])
                continue
            parts.append(char)
        return _camelcase(''.join(parts))

    def generate_request(self, key, value):
        """Turn params provided as a JavaScript data structure into a request.

        The given key holds the resulting parameters to be sent to Juju. The
        value is the variable used for the JavaScript arguments.
        """
        if self.name:
            key = "{}['{}']".format(key, self.name)
            value = '{}.{}'.format(value, _camelcase(self.name))
        return self._add_ref(
            self.kind.generate_request(key, value, self.required))

    def generate_response(self, key, value):
        """Turn a response from Juju into a JavaScript friendly data structure.

        The provided key is the name of the variable used for the JavaScript
        data structure. The value is the variable used for the response.
        """
        if self.name:
            key = '{}.{}'.format(key, _camelcase(self.name))
            value = "{}['{}']".format(value, self.name)
        return self._add_ref(
            self.kind.generate_response(key, value, self.required))

    def _add_ref(self, code):
        """Prepend a line to the given code with the commented Juju ref."""
        if not self.ref:
            return code
        return '// {}\n{}'.format(self.ref, code)


class Basic:
    """A kind for basic types, like integers, strings or booleans."""

    def __init__(self, kind):
        self.kind = kind

    def __str__(self):
        return self.kind

    def generate_request(self, key, value, required):
        if not required:
            value += ' || undefined'
        return '{} = {};'.format(key, value)

    generate_response = generate_request


class Any(Basic):
    """A kind for empty interfaces (any possible value).

    The value can be anything and unfortunately the type is not better
    specified.
    """

    def __init__(self):
        super().__init__('anything')


class Map:
    """A kind for maps from the given key type to the given value type."""

    def __init__(self, key, value):
        self.key, self.value = key, value

    def __str__(self):
        return 'map[{}]{}'.format(self.key, self.value)

    def generate_request(self, key, value, required):
        return self._handle(key, value, self.value.generate_request)

    def generate_response(self, key, value, required):
        return self._handle(key, value, self.value.generate_response)

    def _handle(self, key, value, get_code):
        with _increase_level(self, 'k') as k:
            parts = [value + ' = ' + value + ' || {};']
            parts.append('for (let {k} in {v}) {{'.format(k=k, v=value))
            code = get_code('{}[{}]'.format(key, k), '{}[{}]'.format(value, k))
            parts.append(_indent(1, code))
            parts.append('}')
        return '\n'.join(parts)


class Recursive:
    """A recursive kind.

    This is a temporary helper waiting for proper handling of recursive types.
    """

    def __init__(self, ref):
        self.ref = ref

    def __str__(self):
        return '<{} again>'.format(self.ref)

    def generate_request(self, key, value, required):
        return (
            '// TODO: handle recursive type referencing {}.\n'
            '{} = {};').format(self.ref, key, value)

    generate_response = generate_request


class Slice:
    """A kind for slices containing values of the provided elem type."""

    def __init__(self, elem):
        self.elem = elem

    def __str__(self):
        return '[]' + str(self.elem)

    def generate_request(self, key, value, required):
        return self._handle(key, value, self.elem.generate_request)

    def generate_response(self, key, value, required):
        return self._handle(key, value, self.elem.generate_response)

    def _handle(self, key, value, get_code):
        with _increase_level(self, 'i') as i:
            parts = [
                '{} = [];'.format(key),
                '{} = {} || [];'.format(value, value),
            ]
            parts.append(
                'for (let {i} = 0; {i} < {value}.length; {i}++) {{'
                ''.format(i=i, value=value))
            code = get_code('{}[{}]'.format(key, i), '{}[{}]'.format(value, i))
            parts.append(_indent(1, code))
            parts.append('}')
        return '\n'.join(parts)


class Struct:
    """A kind for structs, whose fields are described by the given types."""

    def __init__(self, types):
        self.types = types

    def __str__(self):
        text = ','.join(str(type_) for type_ in self.types).strip()
        if not text:
            return '<object>'
        return '{' + text + '}'

    def generate_request(self, key, value, required):
        parts = [key + ' = {};', value + ' = ' + value + ' || {};']
        parts.extend(t.generate_request(key, value) for t in self.types)
        return '\n'.join(parts)

    def generate_response(self, key, value, required):
        parts = [key + ' = {};', value + ' = ' + value + ' || {};']
        type_parts = [t.generate_response(key, value) for t in self.types]
        if type_parts:
            parts.extend(type_parts)
        else:
            # This is an opaque object not decsribed by the schema, so just
            # copy it.
            parts.append(key + ' = ' + value + ';')
        return '\n'.join(parts)


class Time:
    """A kind for handing time types."""

    def __str__(self):
        return 'time'

    def generate_request(self, key, value, required):
        # TODO(frankban): convert times to JS Date objects.
        if not required:
            value += ' || undefined'
        return '{} = {};'.format(key, value)

    generate_response = generate_request


def from_gotype(
        types, gotype, name='', ref=None, required=False, visited=None):
    """Return a Type instance from the provided bare Go type.

    Receives the dictionary of type definitions and the Go type to be
    converted. The name, ref, required and visited arguments are only used
    internally.
    """
    if gotype is None:
        # There are no params or no results for the method being inspected.
        return
    gokind = gotype.get('Kind')
    if not gokind:
        ref = gotype.get('Name')
        if not ref:
            # Without a kind and a ref we cannot really do anything.
            return ValueError(
                'go type {} does not include kind or name'.format(gotype))
        return from_gotype(
            types, types[ref],
            name=name, ref=ref, required=required, visited=visited)
    if ref != 'time#Time' and 'MarshalJSON' in gotype.get('Methods', {}):
        # The underlying type could be marshaled in any possible way, so we
        # cannot do any better than assigning the Any type to this Go type.
        kind = Any()
    elif gokind in ('bool', 'string'):
        kind = Basic(gokind)
    elif gokind == 'interface':
        kind = Any()
    elif gokind == 'map':
        key = from_gotype(types, gotype['Key'], required=required)
        val = from_gotype(
            # The visited refs must be passed here as a struct can include
            # fields that are maps of something to another struct.
            types, gotype['Elem'], required=required, visited=visited)
        kind = Map(key, val)
    elif gokind == 'slice':
        elem = from_gotype(types, gotype['Elem'])
        kind = Slice(elem)
    elif ref == 'time#Time':
        kind = Time()
    elif gokind == 'struct':
        kind = _handle_struct(types, gotype, ref, visited)
    elif gokind == 'ptr':
        return from_gotype(types, gotype['Elem'], name=name, required=required)
    elif gokind.startswith('float'):
        kind = Basic('float')
    elif gokind.startswith('int') or gokind.startswith('uint'):
        kind = Basic('int')
    else:
        raise ValueError('unkown gotype kind {}'.format(gokind))
    return Type(name, kind, ref, required)


def _handle_struct(types, gotype, ref, visited):
    # Collect visited refs to avoid looping forever on recursive structs.
    if visited is None:
        visited = set()
    if ref in visited:
        # TODO(frankban) handle recursive stucts.
        return Recursive(ref)
    visited.add(ref)
    fields = []
    for gofield in gotype.get('Fields', []):
        tag, req = _parse_tag(gofield.get('Tag'), gofield['Name'])
        field = from_gotype(
            types, gofield['Type'],
            # Copy the visited refs for each field so that a previous field
            # does not influence subsequent ones.
            name=tag, required=req, visited=visited.copy())
        fields.append(field)
    return Struct(fields)


def uncapitalize(text):
    """Return the given text with no capitalization.

    Turn ThisString into thisString, and THATString into thatString.
    """
    if not text:
        return ''
    if text[0].islower():
        return text
    uppers = []
    for char in text:
        if char.islower():
            break
        uppers.append(char)
    if len(uppers) > 1:
        uppers.pop()
    prefix = ''.join(uppers)
    return prefix.lower() + text[len(prefix):]


def _camelcase(text):
    """Convert the given text from this-format to thisFormat."""
    words = text.split('-')
    first = words.pop(0)
    return ''.join([first.lower()] + [word.capitalize() for word in words])


def _indent(level, text):
    """Indent the given text with the given level of spaces."""
    prefix = '  ' * level
    return '\n'.join(prefix + line for line in text.splitlines())


def _parse_tag(tag, default):
    """Parse a Go structure tag in search for the JSON annotation.

    A tag is usually something like 'json:"name,omitempty"', or just
    'json:"name"', or even 'json:",omitempty"', or maybe 'yaml:"something"', or
    just an empty string.
    Return the JSON name as defined in the tag (or default if not found), and
    whether the field is marked as required (when omitempty is not specified).
    """
    if not tag:
        return default, True
    tags = tag.split()
    for pairs in tags:
        keyval = pairs.split(':', 1)
        if keyval[0] != 'json':
            continue
        if len(keyval) != 2:
            return default, True
        val = keyval[1].strip('"').split(',', 1)
        required = len(val) < 2 or val[1] != 'omitempty'
        return val[0] if val[0] else default, required
    return default, True


@contextmanager
def _increase_level(instance, varname):
    cls = instance.__class__
    cls._level = getattr(cls, '_level', 0) + 1
    if cls._level < 1:
        # This should never happen.
        raise ValueError('invalid level for class {}'.format(cls))
    if cls._level > 1:
        varname = '{}{}'.format(varname, cls._level)
    try:
        yield varname
    finally:
        cls._level -= 1
