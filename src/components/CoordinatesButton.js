import React, {Component} from 'react'

export default class CoordinatesButton extends Component {
  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY])
  }

  render() {
    return <button onClick={this.handleClick}>Bottun</button>
  }
}