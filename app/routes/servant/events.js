import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
  },

  model() {
    return [
      {name: 'some event'},
      {name: 'some other'},
      {name: 'some really good'}
    ];
  }
});
