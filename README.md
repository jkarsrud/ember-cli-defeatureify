# ember-cli-defeatureify [![Build Status](https://travis-ci.org/jkarsrud/ember-cli-defeatureify.png)](https://travis-ci.org/jkarsrud/ember-cli-defeatureify)

Addon for Ember-CLI that allows you to [defeatureify](https://github.com/thomasboyt/defeatureify) your code when building for production.

## Installation

```bash
ember install:addon ember-cli-defeatureify
```

## Usage

Specify features in your project's `Brocfile.js`:

```js
var app = new EmberApp({
  defeatureify: {
    features: {
      "propertyBraceExpansion": true,
      "ember-metal-run-bind": true,
      "with-controller": true,
      "query-params-new": false,
      "string-humanize": false
    }
  }
})
```

## Options

See the [grunt-ember-defeatureify](https://github.com/craigteegarden/grunt-ember-defeatureify#options) options.
