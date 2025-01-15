import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
      this.clickhandler = this.clickhandler.bind(this)
    }
    n=1
    clickhandler = () => {
        if(this.n===1){
            this.setState({
                message:'Goodbye'
            })
            this.n=0
        }
        else{
            this.setState({
                message:'Hello'
            })
            this.n=1
        }
        console.log(this)
    }

  render() {
    return (
        <div>
            <div>{this.state.message}</div>
            {/*<button onClick={this.clickhandler.bind(this)}>Click here</button>*/}
            {/*<button onClick={()=>this.clickhandler()}>Click here</button>*/}
            <button onClick={this.clickhandler}>Click here</button>
        </div>
      
    )
  }
}

export default EventBind