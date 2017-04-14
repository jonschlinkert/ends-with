'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;
  var re = new RegExp(b.replace(/(\W)/g, '\\$1') + '$');
  return a.search(re) !== -1;
};
