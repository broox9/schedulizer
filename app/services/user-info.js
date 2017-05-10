import Ember from 'ember';

export default Ember.Service.extend({
  users: [
    {id: 1, name: 'Jill'},
    {id: 2, name: 'Moe'},
    {id: 3, name: 'DeDe'},
    {id: 4, name: 'Phonte'},
    {id: 5, name: 'Jabril'},
    {id: 6, name: 'Lester'},
    {id: 7, name: 'Felicianna'},
    {id: 8, name: 'Ragine'},
  ],

  get(i) {
    return this.get('users')[i] || null;
  },

  add(user) {
    this.get('users').push(user);
  }
});
