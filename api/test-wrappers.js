// Copyright 2018 Canonical Ltd.
// Licensed under the LGPLv3, see LICENCE.txt file for details.

'use strict';


const tap = require('tap');

const helpers = require('./test-helpers.js');
const wrappers = require('./wrappers.js');


// TODO(frankban): add tests in next branch to keep the PR "small".
tap, helpers, wrappers; // for lint
