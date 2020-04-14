/**
 * @typedef {{BACKGROUND_COLOR?: string, COLOR?: string}} mainColorType
 */
/**
 * @typedef {object} mainContentColor
 * @property {mainColorType} ABOUT
 * @property {mainColorType} PORTFOLIO
 * @property {mainColorType} TECH
 * @property {mainColorType} HISTORY
 */
/** @type {mainContentColor} */
const MAIN_CONTENT_COLOR = {
  ABOUT: {
    BACKGROUND_COLOR: 'inherit',
    COLOR: 'inherit',
  },
  PORTFOLIO: {
    BACKGROUND_COLOR: 'inherit',
    COLOR: 'color: #616161',
  },
  TECH: {
    BACKGROUND_COLOR: '#212121',
    COLOR: '#fafafa',
  },
  HISTORY: {
    BACKGROUND_COLOR: '#212121',
    COLOR: '#fafafa',
  },
};

export default MAIN_CONTENT_COLOR;
