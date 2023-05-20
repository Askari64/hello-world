import React from 'react'

function FunctionClick() {

   function Clickhandler() {
        console.log('Button Clicked')
    }

  return (
    <button onClick={Clickhandler}>Click Me</button>
  )
}

export default FunctionClick