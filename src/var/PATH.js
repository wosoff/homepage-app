const { resolve, join } = require('path');

module.exports = (() => {
  const VIEW = join('src', 'view');
  const VIEWS_PORTFOLIO = join('src', 'view_portfolio');
  const VIEWS_TECH = join('src', 'view_tech');
  const TEMPLATE = 'template';

  return {
    TEMPLATE: {
      ROOT: resolve(VIEW, 'kbk-root', TEMPLATE, 'kbk-root.html'),
      COMMON: resolve(VIEW, 'common-root', TEMPLATE, 'common-root.html'),
      PORTFOLIO: resolve(VIEWS_PORTFOLIO, 'portfolio_app', TEMPLATE, 'portfolio.html'),
      TECH: resolve(VIEWS_TECH, 'tech_app', TEMPLATE, 'tech.html'),
    },
  };
})();
