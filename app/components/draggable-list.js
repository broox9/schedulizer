import Ember from 'ember';

export default Ember.Component.extend({
  handleDragStart(ev) {
    ev.dataTransfer.setData('application/json', ev.target.dataset.user);
    ev.dataTransfer.dropEffect = 'copy';
    console.log("EVENT", ev.dataTransfer)
  }
});
