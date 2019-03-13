// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    // console.log(this)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render(){
    // console.log(this.props)
    return (
      <button onClick={this.handleClick}/>
    )
  }
}

export default CoordinatesButton
