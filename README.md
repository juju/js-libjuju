# jujulib

This project provides a JavaScript API client for interacting with the Juju
WebSocket API.

Take a look at the [documentation](api/doc/index.md) for instructions on how to
get started with the library.

## Updating the schema

To update the schema, run `make update-schema`. This will use the latest Juju
develop as the source for generating a new schema and updating the schema.json
file. A valid Go installation is required in order to run the command.
