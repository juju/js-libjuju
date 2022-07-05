#!/bin/bash
if [ -z "$JUJU_SRC" ]; then
    # Go is moving away from GOPATH. It's better to override this with `export JUJU_SRC=/path/to/juju`
    JUJU_SRC=$GOPATH/src/github.com/juju/juju/
fi
SCHEMA="$JUJU_SRC/apiserver/facades/schema.json"
cd $JUJU_SRC
GIT_SHA=`git rev-parse --short HEAD`
JUJU_VERSION=`cat $JUJU_SRC/version/version.go | grep -P '(const version = )"(.*)"' -o | grep -P '"(.*)"' -o | tr -d '"'`
cd -
echo -n $JUJU_VERSION > schema/juju-version.txt
echo -n $GIT_SHA > schema/juju-git-sha.txt
cp $SCHEMA schema/schema.json
