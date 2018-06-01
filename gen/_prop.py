# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Facade property definitions."""

from collections import namedtuple


class Prop(namedtuple('Prop', 'name kind required')):
    __slots__ = ()

    def __str__(self):
        parts = [self.name, str(self.kind)]
        if self.required:
            parts.append('(required)')
        return ' '.join(parts)


class Dict:

    def __init__(self, props):
        self.props = props

    def __str__(self):
        parts = ['{']
        parts.extend('  {}'.format(prop) for prop in self.props)
        parts.append('}')
        return '\n'.join(parts)


class List:

    def __init__(self, prop):
        self.prop = prop

    def __str__(self):
        return str(self.prop)


kinds = set()


def from_bare_properties(name, info, required=False):
    kind = info.get('type', 'unknown')
    kinds.add(kind)
    if kind == 'object':
        properties = info.get('properties', {})
        required_props = info.get('required', ())
        props = [
            from_bare_properties(k, v, k in required_props)
            for k, v in properties.items()
        ]
        kind = Dict(props)
    if kind == 'array':
        prop = from_bare_properties('[]', info['items'])
        kind = List(prop)
    return Prop(name, kind, required)
