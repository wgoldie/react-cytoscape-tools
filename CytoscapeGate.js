import React from 'react';
import PropTypes from 'prop-types';
import CytoscapeContext from './CytoscapeContext';

class CytoscapeGate extends React.Component {
  render() {
    return (this.context.cy
      ? this.props.children
      : this.props.gateComponent);
  }
}

CytoscapeGate.defaultProps = {
  gateComponent: React.createElement('div'),
};

CytoscapeGate.propTypes = {
  children: PropTypes.node.isRequired,
  gateComponent: PropTypes.node,
};

CytoscapeGate.contextType = CytoscapeContext;

export default CytoscapeGate;
