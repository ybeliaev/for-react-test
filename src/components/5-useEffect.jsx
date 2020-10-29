import React, { useEffect, useState } from "react"

export const PlanetInfo = () => {
    const [name, setName] = useState(null)
    const [id, setID] = useState(1)

    useEffect(()=>{
        let cancelled = false
        fetch(`http://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => !cancelled && setName(data.name))
        return () => cancelled = true // исполнится для пред. эффекта,
        // его данные загрузятся но не отобразятся
    }, [id])
    
    return(
    <div style={{backgroundColor:"Brown", padding: 10, width: '100%'}}>
        <h2>5-useEffect для загрузки данных.</h2>
        <p>{id} - {name} Planet </p>
        <button onClick = {()=>{setID(i => i + 1)}}>ADD</button>
        <button onClick = {()=>{setID(i => i = 1)}}>RESET</button>
    </div>
    )
}