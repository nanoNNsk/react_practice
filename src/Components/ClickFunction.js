import React from 'react'

function ClickFunction() {
    function clickhandler() {
        console.log('button clicked')
    }
  return (
    <button onClick={clickhandler}>press here</button>
  )
}

export default ClickFunction