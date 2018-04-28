'use strict'

// we need stable data to run our tests
global.process = { __proto__: process, pid: 123456 }
Date.now = function () { return 1459875739796 }
require('os').hostname = function () { return 'abcdefghijklmnopqr' }

if (process.listenerCount('SIGHUP') > 0) {
  // needed because of a hook added by code coverage
  process.removeAllListeners('SIGHUP')
}

var pino = require(require.resolve('./../../../'))

// use a destination
var log = pino(pino.destination())
log.info('h')

function foo () {
  setTimeout(foo, 500)
}
foo()