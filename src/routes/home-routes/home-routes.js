const { respondIndexPost } = require('./home-middleware');
const aboutRoutes = require('../portfolio-routes/portfolio-routes');

module.exports = [
  {
    method: 'get',
    path: '/',
    middleware: [
      respondIndexPost,
    ],
  },
  ...aboutRoutes,
];
