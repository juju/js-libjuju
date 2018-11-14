js-libjuju
==========

JavaScript Juju API client.

Documentation
-------------

The documentation for the JavaScript API client can be found `here
<api/doc/index.md>`_.

Updating the schema
-------------------

To update the schema, run `make update-schema`. This will use the latest Juju
develop as the source for generating a new schema and updating the schema.json
file. A valid Go installation is required in order to run the command.
