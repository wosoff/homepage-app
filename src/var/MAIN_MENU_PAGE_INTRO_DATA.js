/**
 * @typedef {{TITLE: string, DESCRIPTION: string}} introDataType
 */
/**
 * @typedef {object} mainMenuIntroDataType
 * @property {introDataType} ABOUT
 * @property {introDataType} PORTFOLIO
 * @property {introDataType} TECH
 * @property {introDataType} HISTORY
 */

/** @type {mainMenuIntroDataType} */
const MAIN_MENU_PAGE_INTRO_DATA = {
  ABOUT: {
    TITLE: 'About',
    DESCRIPTION: 'About 페이지입니다.',
  },
  PORTFOLIO: {
    TITLE: 'Portfolio',
    DESCRIPTION: '포트폴리오 페이지입니다.',
  },
  TECH: {
    TITLE: 'Technology',
    DESCRIPTION: '보유기술 페이지입니다.',
  },
  HISTORY: {
    TITLE: 'History',
    DESCRIPTION: 'History 페이지입니다.',
  },
};

export default MAIN_MENU_PAGE_INTRO_DATA;
