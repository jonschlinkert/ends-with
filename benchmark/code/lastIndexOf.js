'use strict';

module.exports = function(str, substr) {
  if (typeof substr === 'number') substr = '' + substr;
  if (typeof substr !== 'string') return false;
  var idx = str.lastIndexOf(substr);

  if (idx === -1) {
    return false;
  }

  return str.length === (idx + substr.length);
};
