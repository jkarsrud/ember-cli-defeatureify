import Ember from 'ember';
import { FEATURES } from 'ember-cli-defeatureify/FEATURES';

export default Ember.Route.extend({
  model() {
    let model = {};
    if (FEATURES.isEnabled('thing1')) {
      model.thing1 = 'thing1';
    }
    if (FEATURES.isEnabled('thing2')) {
      model.thing2 = 'thing2';
    }
    return model;
  }
});
