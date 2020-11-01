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
    const linkEl = useRef(null);
    

    const toggleVisible = () => {
        setVisible(!visible)
    }
    const checkOutsideClick = (e) => {
        console.log(linkEl)
    }
    useEffect(() => {
        document.body.addEventListener("click", checkOutsideClick)
        console.log(linkEl)
    },[])
    return(
        <div style={{position: 'relative',backgroundColor:"Crimson", padding: 10, width: '100%'}}>
            <h2>9 - Clickable Dropdown</h2>            
            <Dropbtn ref={linkEl} onClick={toggleVisible}>Dropdown</Dropbtn>
            {visible && (<DropdownContent >
                            <div className="dropdown-content">
                                {/* // доп обёртка что-бы прицепиться к классу dropdown-content*/}
                                <A href={null}>Link 1</A>
                                <A href={null}>Link 2</A>
                                <A href={null}>Link 3</A>
                            </div>                
                        </DropdownContent>)}
        </div>
    )
}