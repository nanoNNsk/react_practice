import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        good morning {props.names} your user name is {props.username}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
