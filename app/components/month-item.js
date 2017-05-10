import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['month-item'],
  init() {
    this._super(...arguments)
    this.formattedWeeks = [];
    this.dayMap = new Map();
  },

  willRender() {
    this._super();
    const weeks = this.get('weeks');
    const formattedWeeks = this.normalizeWeeks(weeks);
    this.set('formattedWeeks', formattedWeeks)
  },

  willDestroyElement() {
    //really this needs to be broken down in to sub components
  },

  normalizeWeeks(weeks) {
    // TODO: make this recursive
    const wLength = weeks.length;
    const formattedWeeks = [];
    for (let i = 0; i < wLength; i++) {
      let week = weeks[i];
      let weekLength = week.length;
      const formattedWeek = [];

      for (let j = 0; j < weekLength; j++) {
        const day = week[j];
        const date = day.getDate();
        const month = day.getMonth(); //how should i treat you oh month index!?
        const year = day.getFullYear();
        const id = `${year}-${month}-${date}`;
        const formattedDay = {
          raw: day,
          id,
          date,
          month,
          year,
          isInCurrentMonth: day.getMonth() === this.get('month')
        };
        formattedWeek.push(formattedDay);
      }

      formattedWeeks.push(formattedWeek);
    }

    console.log("formattedWeeks", formattedWeeks)
    return formattedWeeks;
  },

  addItemToDate(item, dateid) {
    if (!this.dayMap[dateid]) {
      this.dayMap[dateid] = [];
    }

    this.dayMap[dateid].concat(JSON.parse(item));
  },

  //actions
  dragOverHandler(ev) {
    ev.preventDefault();
    // console.log("dragOver", ev);
  },

  dragEnterHandler(ev) {
    //highlight the box or something
    // console.log('dragEnter', ev)
    ev.target.classList.add('highlight');
  },

  dragLeaveHandler(ev) {
    //highlight the box or something
    // console.log('dragEnter',ev)
    ev.target.classList.remove('highlight');
  },

  dropHandler(ev) {
    ev.preventDefault();
    ev.target.classList.remove('highlight');
    const transferredData = ev.dataTransfer.getData('application/json');
    const currentElement = ev.target.dataset.dateid;
    console.log('drop', transferredData, currentElement);
    this.addItemToDate(transferredData, currentElement);
  }
});
