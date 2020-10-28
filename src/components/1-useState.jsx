import React from "react";

import clsx from "clsx";

export  const HookSweacher = () => {
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
    return(
      <div style={styles.div}>
        <h2>1-useState</h2>
        <button onClick = {()=>{setColor("black")}}>Dark</button>
        <button onClick = {()=>{setColor("yellow")}}>Light</button>
        <button onClick = {()=>{setFontSize(s => s + 2)}}>+</button>
        <button onClick = {()=>{setPerson(s => {
          return ({
            ...s,
            lastName: "Coco",
          })
        })}
        }>lastName</button>
      </div>
    )
  }