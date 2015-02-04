/* jshint node: true, sub: true */
'use strict';

var defeatureify = require('broccoli-defeatureify');
var insertContent = require('./lib/insert-features');

module.exports = {
  name: 'ember-cli-defeatureify',
  included: function(app) {
    this._super.included.apply(this, arguments);
    this.app = app;
    this.options = getOptions(app, app.options['defeatureify']);
  },
  contentFor: function(type, config) {
    if(this.app.env === 'development' && type === 'app') {
      return insertContent(this.options);
    }
    return '';
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

  if(!options.namespace) {
    options.namespace = app.name;
  }

  if(!options.features) {
    throw new Error("Features are not specified");
  }

  return options;
}
