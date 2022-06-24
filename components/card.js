import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children, style, className}) => (
  <div
    className={className}
    style={{
      flexBasis: 1,
      border: '1px solid',
      padding: '1rem',
      borderRadius: '10px',
      ...style,
    }}
  >
    {children}
  </div>
);
Card.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

export default Card;