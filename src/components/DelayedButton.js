// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  eventhandle = (event) =>{
    event.persist()
    setTimeout(()=>{
      // console.log(event);


      this.props.onDelayedClick(event)

    },this.props.delay)

  }

  render() {
    return (
    <button onClick={this.eventhandle}>DELAYED</button>
    )
  }

}
