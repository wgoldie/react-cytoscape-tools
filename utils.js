/*
 * Attaches the given cytoscape library
 * instance to the given element
 */
export const attachCytoscape = (cytoscape, element, initJSON) => cytoscape({
  container: element,
  ...initJSON,
});
