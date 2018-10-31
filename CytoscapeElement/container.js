import React from 'react';
import PropTypes from 'prop-types';
import CytoscapeContext from '../CytoscapeContext';
import Presentation from './presentation';
import attachCytoscape from '../utils';

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
  cytoscape: require('cytoscape'),
  cyInitJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

CytoscapeElementContainer.propTypes = {
  cytoscape: PropTypes.object,
  cyInitJSON: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};


export default CytoscapeElementContainer;
