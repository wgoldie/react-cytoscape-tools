import React from 'react';
import PropTypes from 'prop-types';

const CytoscapeViewPresentation = ({
  cyRef,
  style,
  className,
  children,
}) => (
  <div style={style} className={className} id="cy" ref={cyRef}>
    {children}
  </div>
);

CytoscapeViewPresentation.propTypes = {
  cyRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  style: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default CytoscapeViewPresentation;
