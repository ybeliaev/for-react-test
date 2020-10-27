import React from "react";

import clsx from "clsx";

import "./App.scss";


const HookSweacher = () => {
  const styles = {
    div:{
      padding: 50,
      backgroundColor: "white"
    }
  }

  return(
    <div style={styles.div}>
      <button onClick = {()=>{}}>Dark</button>
      <button onClick = {()=>{}}>Light</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lol</h1>
        <HookSweacher/>
      </header>
    </div>
  );
}

export default App;
