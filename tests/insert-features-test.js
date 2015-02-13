var insertFeatures = require('../lib/insert-features');

exports.testInsertFeaturesWithOneFeature = function(test) {
  var expected = '(function(w) {w["TEST"] = w["TEST"] || {};w["TEST"].FEATURES = {"test":true};w["TEST"].FEATURES.isEnabled = function(feature) {return this[feature];};})(window);';
  var options = {
    namespace: 'TEST',
    features: {
      test: true
    }
  };

  var actual = insertFeatures(options);

  test.equal(actual, expected);
  test.done();
};

exports.testInsertFeaturesWithMultipleFeatures = function(test) {
  var expected = '(function(w) {w["TEST"] = w["TEST"] || {};w["TEST"].FEATURES = {"test":true,"anotherFeature":false};w["TEST"].FEATURES.isEnabled = function(feature) {return this[feature];};})(window);';
  var options = {
    namespace: 'TEST',
    features: {
      test: true,
      anotherFeature: false
    }
  };

  var actual = insertFeatures(options);

  test.equal(actual, expected);
  test.done();
};
