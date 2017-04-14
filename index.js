/*!
 * ends-with <https://github.com/jonschlinkert/ends-with>
 *
 * Copyright (c) 2014, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;

  var alen = a.length;
  if (Array.isArray(a)) {
    return a[alen - 1] === b;
  }

  var blen = b.length;

  while (blen--) {
    if (b[blen] !== a[alen]) {
      return false;
    }
  }

  return true;
};
