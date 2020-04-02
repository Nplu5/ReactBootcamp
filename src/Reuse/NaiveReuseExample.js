import React from "react"

class NaiveReuseExample extends React.Component{
  state = {
    buttonState: this.stateOptions.off
  };

  stateOptions = {
    off: 1,
    on: 2,
    floating: 4
  }

  render(){
    return(
      <div>
        <h1>A naive implementation of a reusable code</h1>
      </div>
    )
  }
}

export default NaiveReuseExample