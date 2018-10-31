import React from 'react';
import PropTypes from 'prop-types';
import CytoscapeContext from './CytoscapeContext';

class CytoscapeController extends React.Component {
  updateCytoscape = (oldProps) => {
    const { cyJSON } = this.props;
    if (oldProps.cyJSON !== cyJSON) {
      this.context.cy.json(cyJSON);
    }
  }

  componentDidUpdate(oldProps) {
    this.updateCytoscape(oldProps);
  }

  componentDidMount() {
    this.updateCytoscape({});
  }

  render() {
    return this.props.children;
  }
}

CytoscapeController.defaultProps = {
  cyJSON: {},
  children: React.createElement('div'),
};

CytoscapeController.propTypes = {
  cyJSON: PropTypes.object,
  children: PropTypes.node,
};

CytoscapeController.contextType = CytoscapeContext;

export default CytoscapeController;
