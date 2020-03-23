const { respondIndexPost } = require('./home-middleware');

module.exports = [
  {
    method: 'get',
    path: '/',
    middleware: [
      respondIndexPost,
    ],
  },
];
