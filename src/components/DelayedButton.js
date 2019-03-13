// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

  handleClick = (e) => {
    e.persist()
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delayed Button</button>
      </div>
    );
  }
}

export default DelayedButton;