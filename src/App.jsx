import React from "react";

import clsx from "clsx";

import "./App.scss";


const HookSweacher = () => {
  const [color, setColor] = React.useState("black");
  const [fontSize, setFontSize] = React.useState(20);
  const [person, setPerson] = React.useState({
    firstName: "joy",
    lastName: "Niga",
  })
  const styles = {
    div:{
      padding: 50,
      backgroundColor: color,
      fontSize: `${fontSize}px`,
    }
  }
  setPerson((person) => {
    return {...person,firstName: "Joy"}
  })

  return(
    <div style={styles.div}>
      <p>Lol</p>
      <button onClick = {()=>{setColor("black")}}>Dark</button>
      <button onClick = {()=>{setColor("yellow")}}>Light</button>
      <button onClick = {()=>{setFontSize(s => s + 2)}}>+</button>
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
