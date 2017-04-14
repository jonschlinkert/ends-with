'use strict';

module.exports = function(a, b) {
  if (typeof b === 'number') b = '' + b;
  if (typeof b !== 'string') return false;

  var alen = a.length;
  var blen = b.length;

  while (blen--) {
    if (b.charAt(blen) !== a.charAt(alen)) {
      return false;
    }
  }

  return true;
};
