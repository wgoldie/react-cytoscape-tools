import React, { Fragment } from 'react';
import CytoscapeElement from './CytoscapeElement';
import CytoscapeContext from './CytoscapeContext';
import CytoscapeController from './CytoscapeController';
import CytoscapeGate from './CytoscapeGate';

class CytoscapeView extends React.Component {
  componentDidUpdate(oldProps) {
    const { cyJSON } = this.props;
    if (oldProps.cyJSON !== cyJSON) {
      this.context.cy.json(cyJSON);
    }
  }

  render() {
    const {
      cytoscape,
      cyInitJSON,
      cyJSON,
      style,
      className,
      children,
    } = this.props;

    return (
      <Fragment>
        <CytoscapeElement
          cytoscape={cytoscape}
          cyInitJSON={cyInitJSON || cyJSON}
          style={style}
          className={className}
        >
          {children}
        </CytoscapeElement>
        <CytoscapeGate>
          <CytoscapeController />
        </CytoscapeGate>
      </Fragment>
    );
  }
}

CytoscapeView.defaultProps = {
  cytoscape: require('cytoscape'),
  cyInitJSON: {},
  cyJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

CytoscapeView.propTypes = {
  cytoscape: PropTypes.object,
  cyInitJSON: PropTypes.object,
  cyJSON: PropTypes.object,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

CytoscapeView.contextType = CytoscapeContext;

export default CytoscapeView;
