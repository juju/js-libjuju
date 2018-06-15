# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Facade property definitions."""

from collections import namedtuple
import itertools


class Method(namedtuple('Method', 'request params result')):
    """A single API method as exposed by a facade."""

    __slots__ = ()

    def name(self):
        """Return the method name."""
        return uncapitalize(self.request)


class Prop(namedtuple('Prop', 'name kind required')):
    """A JavaScript property."""

    __slots__ = ()

    def __str__(self):
        name = self.name + ': ' if self.name else ''
        text = name + str(self.kind)
        if self.required:
            text += ' (required)'
        return text

    def docstring(self):
        """Return a docstring for this property."""
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

    def marshal(self, key, value):
        """Return this property as a marshaled string."""
        if self.name:
            key = "{}['{}']".format(key, self.name)
            value = '{}.{}'.format(value, _camelcase(self.name))
        marshal_kind = getattr(self.kind, 'marshal', None)
        if marshal_kind:
            return marshal_kind(key, value, self.required)
        if not self.required:
            value += ' || undefined'
        return '{} = {};'.format(key, value)

    def unmarshal(self, key, value):
        """Return this property as a JavaScript string."""
        if self.name:
            key = '{}.{}'.format(key, _camelcase(self.name))
            value = "{}['{}']".format(value, self.name)
        unmarshal_kind = getattr(self.kind, 'unmarshal', None)
        if unmarshal_kind:
            return unmarshal_kind(key, value, self.required)
        if not self.required:
            value += ' || undefined'
        return '{} = {};'.format(key, value)


class Dict:
    """A property type for maps.

    Key/value pairs are represented by the given props.
    """

    def __init__(self, props):
        self.props = props

    def __str__(self):
        text = ','.join(str(prop) for prop in self.props).strip()
        if not text:
            return '<object>'
        return '{' + text + '}'

    def marshal(self, key, value, required):
        parts = [key + ' = {};', value + ' = ' + value + ' || {};']
        parts.extend(prop.marshal(key, value) for prop in self.props)
        return '\n'.join(parts)

    def unmarshal(self, key, value, required):
        parts = [key + ' = {};', value + ' = ' + value + ' || {};']
        prop_parts = [prop.unmarshal(key, value) for prop in self.props]
        if prop_parts:
            parts.extend(prop_parts)
        else:
            # This is an opaque object not decsribed by the schema, so just
            # copy it.
            parts.append(key + ' = ' + value + ';')
        return '\n'.join(parts)


class List:
    """A property type for lists.

    The type is a list of objects represented by the provided prop.
    """
    count = itertools.count(1)

    def __init__(self, prop):
        self.prop = prop

    def __str__(self):
        return '[]' + str(self.prop)

    def marshal(self, key, value, required):
        count = next(self.count)
        parts = [key + ' = [];', value + ' = ' + value + ' || [];']
        i = 'i{}'.format(count)
        parts.append(
            'for (let {i} = 0; {i} < {value}.length; {i}++) {{'
            ''.format(i=i, value=value))
        prop = self.prop.marshal(
            '{}[{}]'.format(key, i), '{}[{}]'.format(value, i))
        parts.append(_indent(1, prop))
        parts.append('}')
        return '\n'.join(parts)

    def unmarshal(self, key, value, required):
        count = next(self.count)
        parts = [key + ' = [];', value + ' = ' + value + ' || [];']
        i = 'i{}'.format(count)
        parts.append(
            'for (let {i} = 0; {i} < {value}.length; {i}++) {{'
            ''.format(i=i, value=value))
        prop = self.prop.unmarshal(
            '{}[{}]'.format(key, i), '{}[{}]'.format(value, i))
        parts.append(_indent(1, prop))
        parts.append('}')
        return '\n'.join(parts)


def from_bare_properties(info, name='', required=False):
    """Return a property object from the provided bare information."""
    if not info:
        return None
    kind = info['type']
    if kind == 'object':
        properties = info.get('properties', {})
        required_props = info.get('required', ())
        props = [
            from_bare_properties(v, name=k, required=k in required_props)
            for k, v in sorted(properties.items())  # Sort for testing.
        ]
        kind = Dict(props)
    if kind == 'array':
        prop = from_bare_properties(info['items'])
        kind = List(prop)
    return Prop(name, kind, required)


def uncapitalize(text):
    """Return the given text with the first letter lowercased."""
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
    prefix = '  ' * level
    return '\n'.join(prefix + line for line in text.splitlines())
