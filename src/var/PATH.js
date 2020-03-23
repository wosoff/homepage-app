const { resolve, join } = require('path');

module.exports = (() => {
  const VIEWS_HOME = join('src', 'views-home');
  const VIEWS_PORTFOLIO = join('src', 'views-portfolio');
  const VIEWS_TECH = join('src', 'views-tech'); 
  const VIEWS_ABOUT = join('src', 'views-about');
  const INDEX ='index'
  const TEMPLATE = 'template';

  return {
    TEMPLATE: {
      HOME: resolve(VIEWS_HOME, INDEX, TEMPLATE, 'home.html'),
      PORTFOLIO: resolve(VIEWS_PORTFOLIO, INDEX, TEMPLATE, 'portfolio.html'),
      TECH: resolve(VIEWS_TECH, INDEX, TEMPLATE, 'tech.html'),
    },
  };
})();
