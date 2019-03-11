// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
  event = (e) =>{
    // console.log(e.clientX, e.clientY);
    let array = []
    array.push(e.clientX)
    array.push(e.clientY)
    // debugger
    this.props.onReceiveCoordinates(array)
    //console.log(this.props);
  }

  render() {
    return (
    <button onClick={this.event}>COORDINATES</button>

    )
  }

}
