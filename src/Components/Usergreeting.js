import React, { Component } from "react";

class Usergreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }
  render() {
    return this.state.isLogged ? (
        <div>Welcome nano 2</div>
        ) : (
        <div>Welcome guest 1</div>
        );
    {/*let message
    if(this.state.isLogged){
        message=<div>Welcome new nano</div>
    }else{
        message=<div>Welcome old guest</div>
    }
    return <div>{message}</div>;*/}
    {/*if (this.state.isLogged) {
        return <div>Welcome nano</div>;
    }else{
        return <div>Welcome guest</div>;
    }*/}
    {/*return <div>hello nano</div>;*/}
  }
}

export default Usergreeting;
