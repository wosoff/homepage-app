import './style/brand.sass';
import React from 'react';

export default function Brand() {
  return (
    <>
      <a className="brand" href="/">
        <i className="brand_logo" />
        <span className="brand_title">Kbk Homepage</span>
      </a>
    </>
  );
}


// origin src
// <a _ngcontent-dpa-c1=""
// class="brand"
// aria-label="Navigate to the material design homepage." href="/">
// <i _ngcontent-dpa-c1="" class="brand__logo">
// </i><span _ngcontent-dpa-c1="" class="brand__title">Material Design</span></a> */
