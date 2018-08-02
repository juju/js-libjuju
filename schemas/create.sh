#!/bin/bash

# Generate the Juju API schema, by downloading and setting up Juju in a
# temporary GOPATH and then running jujugenerateapidoc.

set -euo pipefail

go version || (echo updating schema requires go to be installed; exit 1)

export GOPATH=`readlink -m $(dirname $0)`/build
rm -rf $GOPATH
mkdir -p $GOPATH

# Install juju.
go get -v github.com/rogpeppe/godeps
go get -d -v github.com/juju/juju
pushd $GOPATH/src/github.com/juju/juju
$GOPATH/bin/godeps -u dependencies.tsv
go install -v ./...
popd

# Generate the schema.
go get -v github.com/rogpeppe/misc/cmd/jujuapidoc/jujugenerateapidoc
$GOPATH/bin/jujugenerateapidoc | jq . > $1

echo schema successfully generated
