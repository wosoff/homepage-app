const mainMenuRoutes = require('./main-menu-page-routes/main-menu-page-routes');
const kbkHomeRoutes = require('./kbk-home-routes/kbk-home-routes');

module.exports = [
  ...kbkHomeRoutes,
  ...mainMenuRoutes,
];
