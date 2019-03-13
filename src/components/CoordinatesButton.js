// Code CoordinatesButton Component Here
import React, { Component } from 'react';



class CoordinatesButton extends Component {

  passCoordinates = (e) => (this.props.onReceiveCoordinates([e.clientX, e.clientY]))

  render() {
    return (
      <div>
        <button onClick={this.passCoordinates}>
        Coordinates Button
        </button>
      </div>
    );
  }
}

export default CoordinatesButton;
