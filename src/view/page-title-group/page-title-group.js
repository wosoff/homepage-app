import './style/page-title-group.sass';
import React from 'react';
import PAGE_TITLE_DATA from '../../var/VIEW_PAGE_TITLE_DATA';
import PageTitle from '../page-title/page-title';

export default function PageTitleGroup() {
  return (
    <div className="page-title-group">
      <div className="page-title-group--display-flex">
        {
          PAGE_TITLE_DATA.map((data) => {
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
