import Ember from 'ember';

export default Ember.Controller.extend({
  calendar: Ember.inject.service(),
  users: Ember.inject.service('user-info'),

  init() {
    this._super(...arguments);
    this.users = this.get('users').users;

    const calendar = this.get('calendar');
    const today = this.today = calendar.today;
    const todayMonth = this.todayMonth = today.getMonth();
    const todayYear = this.todayYear = today.getFullYear();

    this.availableYears = this.arrayFromObject(calendar.availableYears);
    this.monthsOfTheYear = this.arrayFromObject(calendar.monthsOfTheYear, true);

    this.selectedMonth = todayMonth;
    this.selectedYear = todayYear;
    this.currentMonthItem = null;
  },

  arrayFromObject(arr, useIndexAsValue = false) {
    return arr.reduce((associativeArray, item, index) => {
      associativeArray.push({
        label: item,
        value: useIndexAsValue ? index : item,
      });
      return associativeArray;
    }, []);
  },

  actions: {
    createMonth() {
      const month = this.get('calendar').generateMonth(this.selectedYear, this.selectedMonth);
      this.set('currentMonthItem', month);
    },

    setSelectedYear(value = this.get('todayYear')) {
      this.set('selectedYear', parseInt(value, 10));
    },

    setSelectedMonth(value = this.get('todayMonth')) {
      this.set('selectedMonth', parseInt(value, 10));
    }
  }
});
