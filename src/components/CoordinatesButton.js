import React from 'react'

export default class CoordinatesButton extends React.Component{

  handleClick(e){
    e.persist()
    const array = [e.clientX, e.clientY]
    console.log(this.props)
    this.props.onReceiveCoordinates(array)
  }

  render(){
    console.log(this.props)
    return ( <button onClick={(e) =>{
      e.persist()
      const array = [e.clientX, e.clientY]
      console.log(this.props)
      this.props.onReceiveCoordinates(array)
    }
    }> Coordinates </button>)
  }
} 