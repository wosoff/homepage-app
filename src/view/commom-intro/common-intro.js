import './style/common-intro.sass';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import appendDividingComment from '../../helpers/append-html-comment';

/**
 * @param {{introTitle: string; introDescripton: string;}} props
 */
export default function CommonIntro(props) {
  const { introTitle, introDescripton } = props;

  useEffect(() => {
    appendDividingComment('.common-intro', 4);
  });

  return (
    <div className="common-intro">
      <section
        className="common-intro--section"
      >
        <div
          className="common-intro--container"
        >
          <div
            className="common-intro__title"
          >
            {introTitle}
          </div>
          <div
            className="common-intro__description"
          >
            {introDescripton}
          </div>
        </div>
      </section>
    </div>
  );
}

CommonIntro.propTypes = {
  introTitle: PropTypes.string.isRequired,
  introDescripton: PropTypes.string.isRequired,
};
