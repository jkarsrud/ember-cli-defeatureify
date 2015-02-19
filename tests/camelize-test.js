var camelize = require('../lib/camelize');

exports.shouldCamelizeNormal = function(test) {
  var expected = 'aNormalString';
  var actual = camelize('a normal string');

  test.equal(actual, expected);
  test.done();
};

exports.shouldCamelizeCapitalized = function(test) {
  var expected = 'aCapitalizedString';
  var actual = camelize('A Capitalized String');

  test.equal(actual, expected);
  test.done();
};

exports.shouldCamelizeDashes = function(test) {
  var expected = 'aDasherizedString';
  var actual = camelize('a-dasherized-string');

  test.equal(actual, expected);
  test.done();
};

exports.shouldCamelizeDotNotation = function(test) {
  var expected = 'dotNotation';
  var actual = camelize('dot.notation');

  test.equal(actual, expected);
  test.done();
};

exports.shouldCamelizeUnderscores = function(test) {
  var expected = 'iAmUnderscored';
  var actual = camelize('i_am_underscored');

  test.equal(actual, expected);
  test.done();
};

exports.shouldIgnoreAlreadyCamelizedStrings = function(test) {
  var expected = 'iAmCamelized';
  var actual = camelize('iAmCamelized');

  test.equal(actual, expected);
  test.done();
};

exports.shouldIgnoreOneWordString = function(test) {
  var expected = 'string';
  var actual = camelize('string');

  test.equal(actual, expected);
  test.done();
};
