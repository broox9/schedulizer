/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'schedulizer',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      sessionServiceName: 'session'
    },

    firebase: {
      apiKey: "AIzaSyDRp_fTVI_O7WLZQeqsl1PKpR3uohUtdkw",
      authDomain: "schedulizer-737d2.firebaseapp.com",
      databaseURL: "https://schedulizer-737d2.firebaseio.com",
      projectId: "schedulizer-737d2",
      storageBucket: "schedulizer-737d2.appspot.com",
      messagingSenderId: "992340983963"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
