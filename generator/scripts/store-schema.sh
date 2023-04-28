#!/bin/bash
JUJU_PATH="${1:-../juju}"
SCHEMA="${JUJU_PATH}/apiserver/facades/schema.json"
JUJU_VERSION=`cat ${JUJU_PATH}/version/version.go | grep -P '(const version = )"(.*)"' -o | grep -P '"(.*)"' -o | tr -d '"'`
echo -n $JUJU_VERSION > generator/schema/juju-version.txt
cp $SCHEMA generator/schema/schema.json
cd $JUJU_PATH
GIT_SHA=`git rev-parse --short HEAD`
cd -
echo -n $GIT_SHA > generator/schema/juju-git-sha.txt