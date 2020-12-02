#!/bin/bash
SCHEMA="`echo $GOPATH`/src/github.com/juju/juju/apiserver/facades/schema.json"
cd $GOPATH/src/github.com/juju/juju
GIT_SHA=`git rev-parse --short HEAD`
JUJU_VERSION=`cat $GOPATH/src/github.com/juju/juju/version/version.go | grep -P '(const version = )"(.*)"' -o | grep -P '"(.*)"' -o | tr -d '"'`
cd -
echo -n $JUJU_VERSION > schema/juju-version.txt
echo -n $GIT_SHA > schema/juju-git-sha.txt
cp $SCHEMA schema/schema.json
