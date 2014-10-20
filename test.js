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
    endsWith('a/b/c.txt', '.txt').should.be.true;
    endsWith('abc', 'c').should.be.true;
  });

  it('should be false if the string does not end with the given pattern.', function () {
    endsWith('a/b/c.txt', 'c.tx').should.be.false;
    endsWith('a/b/c.txt', 'c.tt').should.be.false;
  });

  it('should be true if the array ends with the given string.', function () {
    endsWith(['a', 'b', 'c'], 'c').should.be.true;
    endsWith(['a', 'b', 'c.txt'], 'c.txt').should.be.true;
  });

  it('should be false if the array does not end with the given string.', function () {
    endsWith(['a', 'b', 'c.txt'], '.txt').should.be.false;
    endsWith(['a', 'b', 'c.txt'], 'c.tx').should.be.false;
    endsWith(['a', 'b', 'c.txt'], 'c.tt').should.be.false;
    endsWith(['abc', 'abc', 'abc'], 'c').should.be.false;
  });

  it('should be true if the array ends with the given number.', function () {
    endsWith(['a', 'b', 42], 42).should.be.true;
    endsWith(['a', 'b', 42], '42').should.be.false;
    endsWith(['a', 'b', 42], 41).should.be.false;
  });

  it('should be false if the array ends with the given object.', function () {
    endsWith(['a', 'b', {'c': 'd'}], {'c': 'd'}).should.be.false;
    endsWith(['a', 'b', {'c': 'd'}], {}).should.be.false;
    endsWith(['a', 'b', {'c': 'd'}], 'd').should.be.false;
  });

  it('should be false if the array ends with the given array of strings.', function () {
    endsWith(['a', 'b', ['c', 'd', 'e']], ['c', 'd', 'e']).should.be.false;
    endsWith(['a', 'b', ['q', 'w', 'e']], ['c', 'd', 'e']).should.be.false;
    endsWith(['a', 'b', 'c'], ['c']).should.be.false;
  });

  it('should be false if the array ends with the given array of object(s).', function () {
    endsWith(['a', 'b', [{'c': 'd'}]], [{'c': 'd'}]).should.be.false;
    endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'q': 'w'}, {'e': 'f'}]).should.be.false;
    endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'e': 'f'}, {'q': 'w'}]).should.be.false;
    endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'e': 'f'}]).should.be.false;
  });
});