// @ts-nocheck
/**
 * @param {string} queryToSelect
 * @param {number} count // a number of appending
 */
export default function appendDividingComment(queryToSelect, count) {
  if (document.querySelector(queryToSelect) === null) {
    throw new Error(`Selected element is null that element id:${queryToSelect} is invalid ID`);
  }

  const createComment = () => document.createComment('');

  const elemToAppend = document.querySelector(queryToSelect);

  for (let i = 0; i < count; i += 1) {
    elemToAppend.after(createComment());
  }
}
