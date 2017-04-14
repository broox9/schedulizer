import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider })
      .then((data) => {console.log('CURRENT USER', data)})
      .catch((err) => console.log("ERROR", err))
    },
    signOut() {
      this.get('session').close();
    }
  }
})
