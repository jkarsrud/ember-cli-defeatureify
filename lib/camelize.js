var STRING_CAMELIZE_REGEXP = (/(\-|_|\.|\s)+(.)?/g);

function camelize(key) {
  return key.replace(STRING_CAMELIZE_REGEXP, function(match, separator, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/^([A-Z])/, function(match, separator, chr) {
    return match.toLowerCase();
  });
}

module.exports = camelize;
