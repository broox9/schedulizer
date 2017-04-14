import Ember from 'ember';
import calendar from 'npm:calendar';

const today = new Date();
const cal = new calendar.Calendar;

export default Ember.Service.extend({
  availableYears: [],
  init() {
    const thisYear = today.getFullYear();
    this.get('availableYears').pushObject(thisYear);
    this.get('availableYears').pushObject(thisYear + 1);
  },

  today,

  daysOfTheWeek: [ // this could always be replaced with i18n dates
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],

  monthsOfTheYear: [ // same here
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],

  generateMonth(year = today.getFullYear(), month = today.getMonth()) {
    return cal.monthDates(year, month);
  }
});
