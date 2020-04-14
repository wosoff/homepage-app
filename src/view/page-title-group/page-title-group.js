import './style/page-title-group.sass';
import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../page-title/page-title';

/**
 * @param {{ pageTitleData: Array<any>; }} props
 */
export default function PageTitleGroup(props) {
  const { pageTitleData } = props;

  return (
    <div className="page-title-group">
      <div className="page-title-group--display-flex">
        {
          pageTitleData.map((data) => {
            const {
              OPT_KEY_NAME,
              TITLE_URL,
              POSTER_IMG_PATH,
              POSTER_TITLE,
              POSTER_DESCRIPTION,
            } = data;

            return (
              <PageTitle
                key={OPT_KEY_NAME}
                titleUrl={TITLE_URL}
                posterImgPath={POSTER_IMG_PATH}
                posterTitle={POSTER_TITLE}
                posterDescription={POSTER_DESCRIPTION}
              />
            );
          })
        }
      </div>
    </div>
  );
}

PageTitleGroup.propTypes = {
  pageTitleData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

//  // <div className="mio-multi-up_ngcontent-dtm-c5"> // at mio
//  <div className="page-title-group">

//  {/* <div className="mio-multi-up">  // at mio */}
//  <div className="page-title-group--display-flex">
//    <PageTitle
//      titleUrl={ABOUT.INDEX}
//      posterImgPath="/public/assets/img/dummy-about-ratio-2-1.png"
//      postTitle="Material Design guidelines"
//      postDescription="Material Design principles, styles, and best practices"
//    />
