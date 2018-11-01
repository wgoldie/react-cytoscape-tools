import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InternalPropTypes from './InternalPropTypes';
import CytoscapePropTypes from './CytoscapePropTypes';
import CytoscapeElement from './CytoscapeElement';
import CytoscapeContext from './CytoscapeContext';
import CytoscapeController from './CytoscapeController';
import CytoscapeGate from './CytoscapeGate';

class CytoscapeView extends React.Component {
  componentDidUpdate(oldProps) {
    const { cyJSON } = this.props;
    if (oldProps.cyJSON !== cyJSON) {
      // Have to call this twice because of cytoscape bug
      // https://github.com/cytoscape/cytoscape.js/issues/2210
      this.context.cy.json(cyJSON);
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
  cytoscape: require('cytoscape'), // eslint-disable-line global-require
  cyInitJSON: {},
  cyJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

CytoscapeView.propTypes = {
  cytoscape: PropTypes.func,
  cyInitJSON: CytoscapePropTypes.cyJSON,
  cyJSON: CytoscapePropTypes.cyJSON,
  style: InternalPropTypes.style,
  className: PropTypes.string,
  children: PropTypes.node,
};

CytoscapeView.contextType = CytoscapeContext;

export default CytoscapeView;
