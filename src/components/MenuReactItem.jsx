import React from "react"

export const MenuReactItem = ({items}) => {
    const barElements = items.map((name, idx) => {
        return <li key={idx}>{name}</li>
    });
   return (
       <ul>
           {barElements}
       </ul>
   )
}