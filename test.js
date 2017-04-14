/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var assert = require('assert');
var endsWith = require('./');

describe('endsWith', function () {
  it('should be true if the string ends with the given pattern.', function () {
    assert(endsWith('a/b/c.txt', 'c.txt'));
    assert(endsWith('a/b/c.txt', '.txt'));
    assert(endsWith('abc', 'c'));
  });

  it('should be false if the string does not end with the given pattern.', function () {
    assert(!endsWith('a/b/c.txt', 'c.tx'));
    assert(!endsWith('a/b/c.txt', 'c.tt'));
  });

  it('should be true if the array ends with the given string.', function () {
    assert(endsWith(['a', 'b', 'c'], 'c'));
    assert(endsWith(['a', 'b', 'c.txt'], 'c.txt'));
  });

  it('should be false if the array does not end with the given string.', function () {
    assert(!endsWith(['a', 'b', 'c.txt'], '.txt'));
    assert(!endsWith(['a', 'b', 'c.txt'], 'c.tx'));
    assert(!endsWith(['a', 'b', 'c.txt'], 'c.tt'));
    assert(!endsWith(['abc', 'abc', 'abc'], 'c'));
  });

  it('should be true if the array ends with the given number.', function () {
    assert(endsWith(['a', 'b', 42], 42));
    assert(!endsWith(['a', 'b', 42], '42'));
    assert(!endsWith(['a', 'b', 42], 41));
  });

  it('should be false if the array ends with the given object.', function () {
    assert(!endsWith(['a', 'b', {'c': 'd'}], {'c': 'd'}));
    assert(!endsWith(['a', 'b', {'c': 'd'}], {}));
    assert(!endsWith(['a', 'b', {'c': 'd'}], 'd'));
  });

  it('should be false if the array ends with the given array of strings.', function () {
    assert(!endsWith(['a', 'b', ['c', 'd', 'e']], ['c', 'd', 'e']));
    assert(!endsWith(['a', 'b', ['q', 'w', 'e']], ['c', 'd', 'e']));
    assert(!endsWith(['a', 'b', 'c'], ['c']));
  });

  it('should be false if the array ends with the given array of object(s).', function () {
    assert(!endsWith(['a', 'b', [{'c': 'd'}]], [{'c': 'd'}]));
    assert(!endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'q': 'w'}, {'e': 'f'}]));
    assert(!endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'e': 'f'}, {'q': 'w'}]));
    assert(!endsWith(['a', 'b', [{'q': 'w'}, {'e': 'f'}]], [{'e': 'f'}]));
  });
});
