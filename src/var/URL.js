const { join } = require('path');

const ABOUT = '/about';
const CONTACT = '/contact';
const PORTFOLIO = '/portfolio';
const TECH = '/tech';

module.exports = {
  ABOUT: {
    INDEX: join(ABOUT),
  },
  CONTACT: {
    INDEX: join(CONTACT),
  },
  PORTFOLIO: {
    INDEX: join(PORTFOLIO),
    PID: join(PORTFOLIO, '/pid'),
  },
  TECH: {
    INDEX: join(TECH),
  },
};
