'use strict';

/**
 * ```js
 * indexOf(a, b);
 * ```
 */

module.exports = function indexOf(a, b) {
  a = String(a);
  b = String(b);
  return a.indexOf(b, a.length - b.length) !== -1;
};
