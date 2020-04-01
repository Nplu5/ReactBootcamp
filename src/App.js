import React from "react"

import "./styles.css"

const App = () => {
  return(
    <React.Fragment>
      <h1>Hello World!</h1>
      <div>
        <h2>This is my internal state</h2>
        <div className="stateElement">state 1</div>
        <div className="stateElement">state 2</div>
        <div className="stateElement">state 3</div>
        <div className="stateElement">state 4</div>
        <div className="stateElement">state 5</div>
      </div>
    </React.Fragment>
  )
}

export default App