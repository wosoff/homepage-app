const fs = require('fs');
const util = require('util');
const { TEMPLATE } = require('../../var/PATH');

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
function respond(req, res) {
  util.promisify(fs.readFile)(
    TEMPLATE.COMMON,
    // It must use option utf8. if it must not, browser downs page.
    { encoding: 'utf8' },
  )
    .then((template) => {
    // It must respond by res.send(), not res.end()
    // If res.end() respond instead of res.send(),
    // Character except english, such as korean, japanese will be broken!
      res.send(template);
      res.end();
    }).catch((err) => {
      console.log(err);
    });
}

module.exports = [
  {
    method: 'get',
    path: '/about',
    middleware: [
      respond,
    ],
  },
  {
    method: 'get',
    path: '/portfolio',
    middleware: [
      respond,
    ],
  },
  {
    method: 'get',
    path: '/tech',
    middleware: [
      respond,
    ],
  },
  {
    method: 'get',
    path: '/history',
    middleware: [
      respond,
    ],
  },
];
