import React from 'react';
import PropTypes from 'prop-types';
import CytoscapePropTypes from './CytoscapePropTypes';
import InternalPropTypes from './InternalPropTypes';
import CytoscapeView from './CytoscapeView';
import CytoscapeProvider from './CytoscapeProvider';

const Cytoscape = ({
  cytoscape,
  cyJSON,
  cyInitJSON,
  style,
  className,
  children,
}) => (
  <CytoscapeProvider>
    <CytoscapeView
      cytoscape={cytoscape}
      cyJSON={cyJSON}
      cyInitJSON={cyInitJSON}
      style={style}
      className={className}
    >
      {children}
    </CytoscapeView>
  </CytoscapeProvider>
);

Cytoscape.defaultProps = {
  cytoscape: require('cytoscape'), // eslint-disable-line global-require
  cyInitJSON: {},
  cyJSON: {},
  style: {},
  className: '',
  children: React.createElement('div'),
};

Cytoscape.propTypes = {
  cytoscape: PropTypes.func,
  cyInitJSON: CytoscapePropTypes.cyJSON,
  cyJSON: CytoscapePropTypes.cyJSON,
  style: InternalPropTypes.style,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Cytoscape;
