import React from "react"
import axios from "axios"

import { useState, useEffect } from "react";

export const DataComponent = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1').then(({data}) => {
            console.log("data: ", data)
        })

        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    },[])
    console.log(data)

    return (
        <div style={{backgroundColor:"Teal", padding: 10, width: '100%'}}>
            <h2>10-Работа с fetch\axios</h2>
            <p>yarn add axios</p>
            
        </div>
    )
}