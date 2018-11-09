#!/bin/bash

# Generate the Juju API schema, by downloading and setting up Juju in a
# temporary GOPATH and then running jujugenerateapidoc.

set -euo pipefail

go version > /dev/null 2>&1 || (echo 'updating schema requires go to be installed'; exit 1)
go help mod > /dev/null 2>&1 || (echo 'updating schema requires support for go modules'; exit 1)

export GOPATH=`readlink -m $(dirname $0)`/build
export GO111MODULE=on
export PATH=$GOPATH/bin:$PATH

mkdir -p $GOPATH

GO111MODULE=off go get -u github.com/myitcv/gobin
gobin -u github.com/rogpeppe/gomodmerge
gobin -u github.com/juju/jujuapidoc
jujuapidoc develop | jq . > $1.part
mv $1.part $1

echo schema successfully generated
