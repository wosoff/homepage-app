/* eslint-disable max-len */
import './style/page-title.sass';
import React from 'react';
import PropTypes from 'prop-types';
import Poster from '../poster/poster';

/**
 * @param {{ titleUrl: string; posterImgPath: string; posterTitle: string; posterDescription: string; }} props
 */
export default function PageTitle(props) {
  const {
    titleUrl, posterImgPath, posterTitle, posterDescription,
  } = props;
  return (
    <div className="page-title">

      <a
        className="page-title__link"
        href={titleUrl}
        aria-label="Information For Homepage Producer"
      >
        <Poster
          posterImgPath={posterImgPath}
          posterTitle={posterTitle}
          posterDescription={posterDescription}
        />
      </a>

    </div>
  );
}

PageTitle.propTypes = {
  titleUrl: PropTypes.string.isRequired,
  posterImgPath: PropTypes.string.isRequired,
  posterTitle: PropTypes.string.isRequired,
  posterDescription: PropTypes.string.isRequired,
};


// /**
//  * @param {{ titleImgSrc: string; titleHeader: string; titleDescription: string; }} props
//  */
// function Poster(props) {
//   const { titleImgSrc, titleHeader, titleDescription } = props;

//   return (
//     <div className="poster">
//       <img
//         alt="Poster Thumbnail"
//         className="image"
//         // src="/public/assets/img/dummy-ratio-2-1.png"
//         src={titleImgSrc}
//       />
//       {/* <h4 className="header_ngcontent-fgq-c10"> // at mio */}
//       <h4 className="poster-header poster-header--adjustment">
//         <span className="link">
//           {/* Material Design guidelines */}
//           {titleHeader}
//         </span>
//       </h4>

//       {/* <p  className="_ngcontent-fgq-c10> // at mio */}
//       <p className="poster-description">
//         {/* Material Design principles, styles, and best practices */}
//         {titleDescription}
//       </p>
//     </div>
//   );
// }

// Poster.propTypes = COMMON_PROP_TYPES;

// /**
//  * @param {{ titleSectionHref: string; titleImgSrc: string; titleHeader: string; titleDescription: string; }} props
//  */
// export default function TitleSection(props) {
//   const {
//     titleSectionHref, titleImgSrc, titleHeader, titleDescription,
//   } = props;
//   return (
//     // <div className="mio-title"> // at mio
//     <div className="title-section">

//       {/* <div className="mio-link"> // at mio */}
//       <div className="title-section-link">
//         <a
//           // className="_ngcontent-fgq-c4" // at mio
//           className="title-section-url"
//           href={titleSectionHref}
//           aria-label="Information For Homepage Producer"
//           // target="_blank"
//         >
//           <Poster
//             titleImgSrc={titleImgSrc}
//             titleHeader={titleHeader}
//             titleDescription={titleDescription}
//           />
//         </a>
//       </div>
//     </div>
//   );
// }

// TitleSection.propTypes = {
//   titleSectionHref: PropTypes.string.isRequired,
//   ...COMMON_PROP_TYPES,
// };
