# ember-cli-defeatureify

[![Travis Build Status](https://travis-ci.org/jkarsrud/ember-cli-defeatureify.svg)](https://travis-ci.org/jkarsrud/ember-cli-defeatureify) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/github/jkarsrud/ember-cli-defeatureify?svg=true)](https://ci.appveyor.com/project/jkarsrud/ember-cli-defeatureify)

Addon for Ember CLI that allows you to [defeatureify](https://github.com/thomasboyt/defeatureify) your code when building for production.

## Installation

```bash
ember install ember-cli-defeatureify
```

## Upgrading to 2.X

2.X removed the specifiable namespace in favor of modularized inclusion. You will need to:

* remove the namespace from each `FEATURES` definition.
* include the module in each place that needs feature flags: `import { FEATURES } from 'ember-cli-defeatureify/FEATURES';`

## Usage

Specify features in your project's `ember-cli-build.js`:

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

When building in `development` all feature toggles will remain in the codebase. When building for `prod` it will trigger defeatureifying your code and remove anything behind a feature flag. The feature settings are available to you in your application code under `FEATURES` after importing the module like so:

```js
import { FEATURES } from 'ember-cli-defeatureify/FEATURES';
```

To use the feature flags, you would wrap the code you want to enable like this:

```js
if(FEATURES.isEnabled('propertyBraceExpansion')) {
  // Your code here
} else {
  // What to do if feature is disabled
}
```

**Note:** If you want to remove Ember debug statements, you will need to use `Ember.default` instead of just `Ember` in the `debugStatements` list.

## Options

See [grunt-ember-defeatureify](https://github.com/craigteegarden/grunt-ember-defeatureify#options) for documentation of options.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`
