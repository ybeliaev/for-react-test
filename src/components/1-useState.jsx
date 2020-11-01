/* eslint-disable */
import React from "react";


export  const HookSweacher = () => {
    const [color, setColor] = React.useState("black");
    const [fontSize, setFontSize] = React.useState(20);
    const [person, setPerson] = React.useState({
      firstName: "joy",
      lastName: "Nige",
    })
    const styles = {
      div:{
        padding: 10,
        backgroundColor: color,
        fontSize: `${fontSize}px`,
        width: '100%'
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