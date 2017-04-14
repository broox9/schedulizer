import Ember from 'ember';

export default Ember.Route.extend({
  calendar: Ember.inject.service(),
  month: null,
  year: null,

  setupController(controller) {
    this._super(...arguments);

    controller.set('today', this.get('calendar.today'))
    controller.set('daysOfTheWeek', this.get('calendar.daysOfTheWeek'))
    controller.set('monthsOfTheYear', this.get('calendar.monthsOfTheYear'))
    controller.set('availableYears', this.get('calendar.availableYears'))
    controller.set('todayMonthIndex', this.get('calendar.today').getMonth())
    controller.set('todayYear', this.get('calendar.today').getFullYear())
  },

  actions: {
    createMonth() {
      // const props = this.getProperties('selectedMonth', 'selectedYear')
      // console.log('props', props)
      const month = this.get('calendar').generateMonth();
      console.log('MONTH', month);
    },

    setMonth(value) {
      console.log('setMonth', value);
    }
  }
});
