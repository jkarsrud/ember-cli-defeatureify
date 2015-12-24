import { moduleFor, test } from 'ember-qunit';

moduleFor('route:application', 'Unit | Route | application');

test('Feature flags work.', function(assert) {
  let route = this.subject();
  assert.deepEqual(route.model(), { thing1: 'thing1' }, 'Features are successfully flagged.');
});
