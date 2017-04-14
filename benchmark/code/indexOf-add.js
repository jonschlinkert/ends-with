'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;
  var idx = a.indexOf(b);
  if (idx === -1) {
    return false;
  }
  return idx + b.length === a.length;
};
