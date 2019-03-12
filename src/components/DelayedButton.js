import React from 'react'

export default class DelayedButton extends React.Component{
  render(){
    console.log(this.props)
    return <button onClick={(e) => {
      e.persist()
      setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
      
    }
  }> Suppppppp </button>
  }
}