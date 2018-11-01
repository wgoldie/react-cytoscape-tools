import React from 'react';
import PropTypes from 'prop-types';
import InternalPropTypes from '../InternalPropTypes';

const CytoscapeElementPresentation = ({
  cyRef,
  style,
  className,
  children,
}) => (
  <div style={style} className={className} id="cy" ref={cyRef}>
    {children}
  </div>
);

CytoscapeElementPresentation.propTypes = {
  cyRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  style: InternalPropTypes.style.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CytoscapeElementPresentation;
