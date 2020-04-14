import './style/main_content.sass';
import React, { useEffect } from 'react';
import appendHTMLComment from '../../helpers/append-html-comment';

/**
 * @param {React.ComponentType[]} children
 * @returns {React.ComponentType}
 */
export default (...children) => () => {
  useEffect(() => {
    appendHTMLComment('#main_content', '');
  });

  return (
    <>
      <main
        aria-label="Main Content"
        className="main"
        id="main_content"
        role="main"
      >
        { children.map((C) => (<C key={C.name} />)) }
      </main>
    </>
  );
};
