// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
  handleClickOfDelay = event => {
    event.persist()
    setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleClickOfDelay}>Delay</button>
    )
  }
}

export default DelayedButton
