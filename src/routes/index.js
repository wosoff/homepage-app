const homeRoutes = require('./home-routes/home-routes');
const portfolioRoutes = require('../../__temp/portfolio-routes/portfolio-routes');
const techRoutes = require('./tech-routes/tech-routes');

module.exports = [
  // ...indexRoutes,
  ...homeRoutes,
  ...portfolioRoutes,
  ...techRoutes,
];
