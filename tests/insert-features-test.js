var insertFeatures = require('../lib/insert-features');

exports.testInsertFeaturesWithOneFeature = function(test) {
  var expected = 'TEST = {};TEST.FEATURES = {"test":true};TEST.FEATURES.isEnabled = function(feature) {return this[feature];};';
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
  var expected = 'TEST = {};TEST.FEATURES = {"test":true,"anotherFeature":false};TEST.FEATURES.isEnabled = function(feature) {return this[feature];};';
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
