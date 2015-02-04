function featuresPrefix(namespace) {
  var prefix = [
    '<script>',
    '' + namespace + ' = {};',
    '' + namespace + '.FEATURES = {'
  ];

  return prefix.join('');
}

function featuresSuffix(namespace) {
  var isEnabled = function() {
    return [
      namespace + '.FEATURES.isEnabled = function(feature) {',
      'return this[feature];',
      '};'
    ].join('');
  };

  var suffix = [
    '};',
    isEnabled(),
    '</script>'
  ];

  return suffix.join('');
}

function featuresContent(features) {
  var _features = [];

  Object.keys(features).forEach(function(feature) {
    var value = features[feature];
    _features.push('"' + feature + '"' + ':' + value);
  });

  return _features.join(',');
}

function insertFeatures(options) {
  var features = [
    featuresPrefix(options.namespace),
    featuresContent(options.features),
    featuresSuffix(options.namespace)
  ];

  return features.join('');
}

module.exports = insertFeatures;
