# ember-cli-defeatureify [![Build Status](https://travis-ci.org/jkarsrud/ember-cli-defeatureify.svg)](https://travis-ci.org/jkarsrud/ember-cli-defeatureify)

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
    namespace: 'mynamespace',
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

When building in `development`, these features will be inlined in `my-app.js`, while they're only used for defeatureifying your code when building in `production`. The features are available to you in your application code under `mynamespace.FEATURES`.

To use the feature flags, you would wrap the code you want to enable like this:

```js
if(mynamespace.FEATURES.isEnabled('propertyBraceExpansion')) {
  // Your code here
} else {
  // What to do if feature is disabled
}
```

## Options

### options.namespace
Namespace defaults to your application name from `package.json`

See [grunt-ember-defeatureify](https://github.com/craigteegarden/grunt-ember-defeatureify#options) for more documentation of options.
