import React from 'react';
import PropTypes from 'prop-types';
import CytoscapePropTypes from '../CytoscapePropTypes';
import InternalPropTypes from '../InternalPropTypes';
import CytoscapeContext from '../CytoscapeContext';
import Presentation from './presentation';

/*
 * Attaches the given cytoscape library
 * instance to the given element
 */
const attachCytoscape = (cytoscape, element, initJSON) => cytoscape({
  container: element,
  ...initJSON,
});

class CytoscapeElementContainer extends React.Component {
  constructor(props) {
    super(props);
    this.cyRef = React.createRef();
  }

  componentDidMount() {
    const cyNode = this.cyRef.current;
    const { cytoscape, cyInitJSON } = this.props;
    const cy = attachCytoscape(cytoscape, cyNode, cyInitJSON);
    this.context.setCy(cy);
  }

  render() {
    const { cyRef } = this;
    const { style, className, children } = this.props;
    return Presentation({
      cyRef,
      style,
      className,
      children,
    });
  }
}

CytoscapeElementContainer.contextType = CytoscapeContext;

CytoscapeElementContainer.defaultProps = {
  cytoscape: require('cytoscape'), // eslint-disable-line global-require
  cyInitJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

CytoscapeElementContainer.propTypes = {
  cytoscape: PropTypes.func,
  cyInitJSON: CytoscapePropTypes.cyJSON,
  style: InternalPropTypes.style,
  className: PropTypes.string,
  children: PropTypes.node,
};


export default CytoscapeElementContainer;
