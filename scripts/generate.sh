#!/bin/bash
SCHEMA="`echo $GOPATH`/src/github.com/juju/juju/apiserver/facades/schema.json"
cd $GOPATH/src/github.com/juju/juju
GIT_SHA=`git rev-parse --short HEAD`
JUJU_VERSION=`cat $GOPATH/src/github.com/juju/juju/version/version.go | grep -P '(const version = )"(.*)"' -o | grep -P '"(.*)"' -o`
cd -

SCHEMA=$SCHEMA JUJU_VERSION=$JUJU_VERSION JUJU_GIT_SHA=$GIT_SHA node --enable-source-maps generator/index.js
