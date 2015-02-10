'use strict';

module.exports = function (a, b) {
  // if (Array.isArray(a)) {
  //   return a[a.length - 1] === b;
  // }

  a = String(a);
  b = String(b);

  var aLast = a.length - 1;
  var bLast = b.length - 1;

  if (a.charAt(aLast) !== b.charAt(bLast)) {
    return false;
  }

  return true;
};
