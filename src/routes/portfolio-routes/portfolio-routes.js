const { respondGIFImage, respondVideoMP4, respondSiteJPGImages, respondStandAloneHTML, respondNew} = require('./portfolio-middleware');

module.exports = [
  {
    method: 'get',
    path: '/play',
    middleware: [
      respondNew,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/index',
    middleware: [
      respondStandAloneHTML,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/banner/:name',
    middleware: [
      respondGIFImage,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/site/:name',
    middleware: [
      respondSiteJPGImages,
    ],
  },
  {
    method: 'get',
    path: '/portfolio/videos/:name',
    middleware: [
      respondVideoMP4,
    ],
  },
];
