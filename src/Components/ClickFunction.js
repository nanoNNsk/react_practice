import React from "react";

function ClickFunction() {
  function clickhandler() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={clickhandler}>press here</button>
    </div>
  );
}

export default ClickFunction;
