'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  fixtures: 'samples/*.js',
  add: 'implementations/*.js',
  cwd: __dirname
});

suite.run();
