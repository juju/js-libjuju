#!/bin/bash
SCHEMA="./juju/apiserver/facades/schema.json"
JUJU_VERSION=`cat ./juju/version/version.go | grep -P '(const version = )"(.*)"' -o | grep -P '"(.*)"' -o | tr -d '"'`
echo -n $JUJU_VERSION > schema/juju-version.txt
cp $SCHEMA schema/schema.json
cd ./juju
GIT_SHA=`git rev-parse --short HEAD`
echo -n $GIT_SHA > schema/juju-git-sha.txt
cd -