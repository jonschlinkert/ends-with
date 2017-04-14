'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;
  return a.slice(-b.length) === b;
};
