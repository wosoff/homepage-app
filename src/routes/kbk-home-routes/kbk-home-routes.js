const { respondIndexPost } = require('./kbk-home-middleware');
const mainMenuPage = require('../main-menu-page-routes/main-menu-page-routes');

module.exports = [
  {
    method: 'get',
    path: '/',
    middleware: [
      respondIndexPost,
    ],
  },
  ...mainMenuPage,
];
