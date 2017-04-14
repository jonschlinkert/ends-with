/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(a, b) {
  if (Array.isArray(a) && b) {
    return a[a.length - 1] === b;
  }

  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;

  return a.slice(-b.length) === b;
};
