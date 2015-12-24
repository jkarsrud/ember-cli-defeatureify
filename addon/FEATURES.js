import config from 'ember-cli-defeatureify/config';

const output = JSON.parse(JSON.stringify(config));
output.isEnabled = function(feature) { return this[feature]; };

export const FEATURES = output;