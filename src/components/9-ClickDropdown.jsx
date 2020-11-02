/* eslint-disable */
import React from "react"
import styled from "styled-components"

import { useState, useRef } from "react";
import { useEffect } from "react";

const Dropbtn = styled.button`
    background-color: #3498DB;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
`
const DropdownContent = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

`
const A = styled.a`
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    &:hover{background-color: #c0fafc; }  
`
 

export const ClickDropdown = () => {
    const [visible, setVisible] = useState(false)
    const linkRef = useRef(null);
    

    const toggleVisible = () => {
        setVisible(!visible)
    }
    const checkOutsideClick = (e) => {
        if(!e.path.includes(linkRef.current)){
            setVisible(false)
        }
    }
    useEffect(() => {
        document.body.addEventListener("click", checkOutsideClick)
        
    },[])
    return(
        <div style={{position: 'relative',backgroundColor:"Crimson", padding: 10, width: '100%'}}>
            <h2>9 - Clickable Dropdown</h2>            
            <Dropbtn ref={linkRef} onClick={toggleVisible}>Dropdown</Dropbtn>
            {visible && (<DropdownContent> 
                                <A href={null}>Link 1</A>
                                <A href={null}>Link 2</A>
                                <A href={null}>Link 3</A>                                           
                        </DropdownContent>)}
        </div>
    )
}
// ref={linkRef} можно вешать на контейнер, где выпадающий список - ребёнок. Иначе клик на список закрывает его, но это если нужно такое поведение