import React from 'react';
import PropTypes from 'prop-types';
import CytoscapeContext from '../context';
import Presentation from './presentation';
import attachCytoscape from '../utils';

class CytoscapeViewContainer extends React.Component {
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
      children
    });
  }
}

CytoscapeViewContainer.contextType = CytoscapeContext;

CytoscapeViewContainer.defaultProps = {
  cytoscape: require('cytoscape'),
  cyInitJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

CytoscapeViewContainer.propTypes = {
  cytoscape: PropTypes.object,
  cyInitJSON: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};


export default CytoscapeViewContainer;
