/* jshint node: true, sub: true */
'use strict';

var defeatureify = require('broccoli-defeatureify');
var checker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-cli-defeatureify',
  init: function() {
    checker.assertAbove(this, '2.2.0');
  },
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app = app;
    this.options = getOptions(app, app.options['defeatureify']);
  },
  contentFor: function(type, config) {
    if (type === 'head') {
      return '<meta name="ember-cli-defeatureify/config" data-module="true" content="' + escape(JSON.stringify(this.options.features)) + '" />';
    }
  },
  postprocessTree: function(type, tree) {
    if(this.app.env === 'production' && type === 'all') {
      tree = defeatureify(tree, this.options);
    }
    return tree;
  }
};

function getOptions(app, options) {
  options = options || {};
  options.namespace = options.namespace || '_emberCliDefeatureifyFEATURES';

  if(!options.features) {
    throw new Error("Features are not specified");
  }

  return options;
}
