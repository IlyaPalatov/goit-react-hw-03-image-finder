import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button type="button" className="button" onClick={onClick}>
      Load More
    </button>
  );
};

export default Button;
