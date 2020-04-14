/* eslint-disable react/jsx-props-no-spreading */
import './style/main_content.sass';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{ children: React.ReactChild[]; cssPrps?: React.CSSProperties}} props
 */
export default function MainContent(props) {
  const { children, cssPrps } = props;

  return (
    <>
      <main
        aria-label="Main Content"
        className="main"
        id="main_content"
        role="main"
        style={{ ...cssPrps }}
      >
        {children}
      </main>
    </>
  );
}

MainContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  cssPrps: PropTypes.objectOf(PropTypes.string),
};

MainContent.defaultProps = {
  cssPrps: {},
};
