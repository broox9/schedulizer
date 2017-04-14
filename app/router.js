import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.route('login');

  this.route('servant', {path: 'servant'}, function() {
    this.route('events', { path: ':id/events'});
    this.route('servantnotfound', {path: '*path'});
  });

  this.route('notfound', {path: '*path'});
  this.route('servants');
  this.route('admin');
});

export default Router;
