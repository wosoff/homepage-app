import './style/main-container.sass';
import React from 'react';
import PropTypes from 'prop-types';
import MainContainerHeader from '../main-container--header/main-container--header';

/**
 * @param {{ children: React.ReactChild[]}} props
 */
export default function MainContainer(props) {
  const { children } = props;

  return (
    <>
      <section className="main-section">
        <div className="main-container">
          <MainContainerHeader />
          {children}
        </div>
      </section>
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
