import React from "react"
import { MenuReactItem } from "./MenuReactItem"

const menuElements = ["DOC", "PROJECT", "ABOUT"]

export const MenuReact = () => {

    return(        
            
            <MenuReactItem items={menuElements}/>
        
    )
}