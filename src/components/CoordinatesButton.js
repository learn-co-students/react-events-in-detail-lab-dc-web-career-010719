import React, {Component} from 'react'

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
    this.onReceiveCoordinates = this.props.onReceiveCoordinates
  }

  handleClick(e) {
    let coords = [e.clientX, e.clientY]
    this.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>Coordinates</button>
    )
  }
}

export default CoordinatesButton
