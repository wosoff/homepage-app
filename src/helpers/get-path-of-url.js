/**
 * @param {string} href
 */
export default function getPathOfUrl(href) {
  const paths = href.split('/')
    .map((frag) => frag.trim().toUpperCase());

  const lastPath = paths[paths.length - 1];
  return lastPath;
}
