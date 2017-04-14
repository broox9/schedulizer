import Ember from 'ember';

export function eq(params) {
  const [a, b] = params;
  return a === b;
}

export default Ember.Helper.helper(eq);
