/* jshint node: true, sub: true */
'use strict';

module.exports = {
  name: 'ember-cli-defeatureify',
  included: function(app) {
    this._super.included.apply(this, arguments);

    var options = getOptions(app, app.options['defeatureify']);

    var plugin = {
      name: 'ember-cli-defeatureify',
      ext: 'js',
      toTree: function(tree) {
        return require('broccoli-defeatureify')(tree, options);
      }
    };

    app.registry.add('js', plugin);
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
