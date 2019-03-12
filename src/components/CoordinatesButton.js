// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
  handleClickOfButton = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.handleClickOfButton}>Coors</button>
    )
  }
}

export default CoordinatesButton
