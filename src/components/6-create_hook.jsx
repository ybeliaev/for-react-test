import React, { useState, useEffect } from "react"

const usePlanetInfo = (id) => {
    const [name, setName] = useState(null)
    useEffect(()=>{
        let cancelled = true
        fetch(`http://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => cancelled && setName(data.name))
        return () => cancelled = false
    }, [id])
    return name
}

export const PlanetInfoHook = () => {
    const [id, setID] = useState(1)
    const name = usePlanetInfo(id)
    return(
        <div style={{backgroundColor:"DarkGoldenRod", padding: 10, width: '100%'}}>
        <h2>6-Создание своего хука.</h2>
        <p>{id} - {name} Planet </p>
        <button onClick = {()=>{setID(i => i + 1)}}>ADD</button>
        <button onClick = {()=>{setID(i => i = 1)}}>RESET</button>
    </div>
    )
}