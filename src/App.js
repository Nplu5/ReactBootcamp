import React from "react"

import NaiveReuseExample from "./Reuse/NaiveReuseExample"

import "./styles.css"

const App = () => {
  return(
    <React.Fragment>
      <h1>Hello World!</h1>
      <NaiveReuseExample />
    </React.Fragment>
  )
}

export default App