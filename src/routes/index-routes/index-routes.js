const { respondIndexPost } = require('./index-middleware');

module.exports = [
  {
    method: 'get',
    path: '/',
    middleware: [
      respondIndexPost,
    ],
  },
];
