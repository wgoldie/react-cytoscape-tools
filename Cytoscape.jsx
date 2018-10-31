import React from 'react';
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

export default Cytoscape;
