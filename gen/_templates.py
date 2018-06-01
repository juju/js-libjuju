# Copyright 2018 Canonical Ltd.
# Licensed under the LGPLv3, see LICENCE.txt file for details.

"""Templates for generating the JavaScript API client."""


from jinja2 import Template


facade = Template("""
class {{ name }} {
  constructor(client) {
    this._client = client;
  }
  {% for prop in props %}
  {{ prop.name }}({{ prop.args|join(', ') }}) {

  }
  {% endfor %}
}
"""[1:])
