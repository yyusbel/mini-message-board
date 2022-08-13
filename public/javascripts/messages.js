const moment = require('moment');
let date = moment().startOf('day').fromNow();
let date2 = moment().startOf('hour').fromNow();

// default messages shown in index
const messages = [
  {
    title: 'On the topic of power',
    description:
      'Power has remained a challenging issue in the political discourse in Nigeria.',
    username: 'ahbelg',
    date: date2,
  },
  {
    title: 'Energy crisis',
    description:
      'The Russian-Ukrain war has almost put the world in an energy crisis',
    username: 'Maddest',
    date: date,
  },
];

module.exports = messages;