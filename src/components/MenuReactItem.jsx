import React from "react"
import { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;
`
const Li = styled.li`
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
`

export const MenuReactItem = ({items}) => {
    const [activeItem, setActiveItem] = useState(0)

    const barElements = items.map((name, idx) => {
        return <Li key={idx} 
        className={activeItem == idx ? "active" : ""}
        onClick={()=>setActiveItem(idx)}
        >
            {name}
        </Li>
    });
   return (
       <Ul>           
           {barElements}
       </Ul>
   )
}