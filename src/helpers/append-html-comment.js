// @ts-nocheck
/**
 * @param {string} queryToSelect
 * @param {string} msg
 */
export default function appendHTMLComment(queryToSelect, msg) {
  if (document.querySelector(queryToSelect) === null) {
    throw new Error(`Selected element is null that element id:${queryToSelect} is invalid ID`);
  }

  const parentElem = document.querySelector(queryToSelect);
  const { children, lastElementChild } = parentElem;

  const createHTMLComment = () => document.createComment(msg);
  // eslint-disable-next-line no-restricted-syntax
  for (const child of children) {
    if (child === lastElementChild) {
      break;
    }

    child.after(createHTMLComment());
    child.after(createHTMLComment());
    child.after(createHTMLComment());
    child.after(createHTMLComment());
  }
}
