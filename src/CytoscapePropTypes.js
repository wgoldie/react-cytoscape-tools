import PropTypes from 'prop-types';

const xyPos = PropTypes.shape({
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
});

const anyElementPropTypes = {
  scratch: PropTypes.object,
  position: xyPos,
  selected: PropTypes.bool,
  locked: PropTypes.bool,
  grabbable: PropTypes.bool,
  classes: PropTypes.string,
};

const cyId = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const cyEdge = PropTypes.shape({
  ...anyElementPropTypes,
  group: prop => prop === 'edges',
  data: PropTypes.shape({
    id: cyId,
    parent: cyId,
    source: cyId.isRequired,
    target: cyId.isRequired,
  }),
});

const cyNode = PropTypes.shape({
  ...anyElementPropTypes,
  group: prop => prop === 'nodes',
  data: PropTypes.shape({
    id: cyId,
    parent: cyId,
  }),
});

const cyGenericElement = PropTypes.shape({
  group: (props, propName, componentName) => {
    if (props.group) {
      return (new Error(
        `Invalid element json with group '${props.group}'supplied to ${componentName}.
        Group must be 'nodes', 'edges', or undefined,
        and edges must have source and target properties.`,
      ));
    }
    return undefined;
  },
});

const cyElement = PropTypes.oneOfType([
  cyEdge,
  cyNode,
  cyGenericElement,
]);

const cyLayout = PropTypes.shape({ name: PropTypes.string.isRequired });

const cyStyle = PropTypes.oneOfType([
  PropTypes.shape({
    selector: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
  }),
  PropTypes.string,
  PropTypes.func,
]);

const cyJSON = PropTypes.shape({
  container: PropTypes.instanceof(Element),
  elements: PropTypes.arrayOf(cyElement),
  layout: cyElement,
  style: PropTypes.arrayOf(cyStyle),
  zoom: xyPos,
  minZoom: PropTypes.number,
  maxZoom: PropTypes.number,
  zoomingEnabled: PropTypes.bool,
  panningEnabled: PropTypes.bool,
  userPanningEnabled: PropTypes.bool,
  boxSelectionEnabled: PropTypes.bool,
  selectionType: PropTypes.oneOf(['single', 'additive']),
  touchTapThreshold: PropTypes.number,
  desktopTapThreshold: PropTypes.number,
  autolock: PropTypes.bool,
  autoungrabify: PropTypes.bool,
  autounselectify: PropTypes.bool,
  headless: PropTypes.bool,
  styleEnabled: PropTypes.bool,
  hideEdgesOnViewport: PropTypes.bool,
  hideLabelsOnViewport: PropTypes.bool,
  textureOnViewport: PropTypes.bool,
  motionBlur: PropTypes.bool,
  motionBlurOpacity: PropTypes.number,
  wheelSensitivity: PropTypes.number,
  pixelRatio: PropTypes.oneOfType([
    PropTypes.oneOf(['auto']),
    PropTypes.number,
  ]),
});

export default {
  cyId,
  cyJSON,
  cyNode,
  cyEdge,
  cyElement,
  cyLayout,
  cyStyle,
};
