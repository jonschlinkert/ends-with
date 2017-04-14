'use strict';

var Suite = require('benchmarked');
var suite = new Suite({
  fixtures: 'fixtures/*.js',
  code: 'code/*.js',
  cwd: __dirname
});

suite.run();
