import './style/poster.sass';
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @param {{ posterImgPath: string; posterTitle: string; posterDescription: string; }} props
 */
export default function Poster(props) {
  const { posterImgPath, posterTitle, posterDescription } = props;

  return (
    <div className="poster">
      <img
        alt="Poster Thumbnail"
        className="poster__img"
        src={posterImgPath}
      />
      <h4 className="poster__header poster__header--adjustment">
        <span className="link">
          {posterTitle}
        </span>
      </h4>
      <p className="poster__description">
        {posterDescription}
      </p>
    </div>
  );
}

Poster.propTypes = {
  posterImgPath: PropTypes.string.isRequired,
  posterTitle: PropTypes.string.isRequired,
  posterDescription: PropTypes.string.isRequired,
};
