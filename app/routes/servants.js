import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { name: 'Stu', id: 1 },
      { name: 'Mildred', id: 2},
      { name: 'She\'Raye', id: 3 },
      { name: 'Smitty', id: 4 },
      { name: 'Bo Jack', id:  5},
      { name: 'Gertrude', id: 6},
      { name: 'Wendell', id: 7},
    ];
  }
});
