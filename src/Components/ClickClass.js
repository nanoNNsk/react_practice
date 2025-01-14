import React, { Component } from 'react'

class ClickClass extends Component {
    clickhandler(){
        console.log('second button clicked')
    }
  render() {
    return (
      <button onClick={this.clickhandler}>click here</button>
    )
  }
}

export default ClickClass