/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var endsWith = require('./');

describe('endsWith', function () {
  it('should be true if the string ends with the given pattern.', function () {
    endsWith('a/b/c.txt', 'c.txt').should.be.true;
    endsWith('a/b/c.txt', 'c.tt').should.be.false;
  });
});