import Ember from 'ember';

export function json(obj/*, hash*/) {
  return JSON.stringify(obj);
}

export default Ember.Helper.helper(json);
