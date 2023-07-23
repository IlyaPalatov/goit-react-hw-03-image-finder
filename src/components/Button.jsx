import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" className="button" onClick={onClick}>
        Load More
      </button>
    );
  }
}

export default Button;
