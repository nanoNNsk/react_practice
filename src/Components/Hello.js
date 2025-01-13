import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Nano</h1>
    //     </div>
    // )
    return React.createElement('div',null,React.createElement('h1',null,'Hello Nano'))
}


export default Hello;