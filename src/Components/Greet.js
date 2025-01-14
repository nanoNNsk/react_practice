import React from "react";

const Greet = props => {
  const { names, username } = props;
  return (
    <div>
      <h1>
        good morning {names} your user name is {username}
      </h1>
    </div>
  );
};

export default Greet;
