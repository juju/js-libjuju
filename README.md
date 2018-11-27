# jujulib

This project provides a JavaScript API client for interacting with the Juju
WebSocket API.

Take a look at the [documentation](api/doc/index.md) for instructions on how to
get started with the library.

## Updating the schema

To update the schema, run `make update-schema`. This will use the latest Juju
develop as the source for generating a new schema and updating the schema.json
file. A valid Go installation is required in order to run the command.

## Updating the API

After updating the public API [client.js](api/client.js) you should update the documentation for the API. This is done by modifying the `PUBLIC_API` array in [_render.py](generator/_render.py) to include the new method name and then run `make generate`. All of the files will have the `generated date` updated and the docs will have been updated. Check the git diff to validate the changes.
