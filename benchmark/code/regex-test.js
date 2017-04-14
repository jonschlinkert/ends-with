'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;
  b = b.replace(/(\W)/g, '\\$1');
  return new RegExp(b + '$').test(a);
};
