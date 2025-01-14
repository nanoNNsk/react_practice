import React,{Component} from "react";

class Welcome extends Component {
    render() {
        const { names, username } = this.props;
        return <h1>Welcome {names} and nickname is {username} </h1>;
    }
}

export default Welcome;