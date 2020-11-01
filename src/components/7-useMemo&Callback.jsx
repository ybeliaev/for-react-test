/* eslint-disable */
import React, { useState, useEffect } from "react"
import { useCallback } from "react"

const getPlanet = id => {
    return (
        fetch(`http://swapi.dev/api/planets/${id}/`)
        .then(res => res.json())
        .then(data => data)
    )
    
}
// хук получающий данные из любой ассинхронной функции возвращающей промис
const useRequest = request => {
    const [dataState, setDataState] = useState(null)
    useEffect(()=>{
        let cancelled = false
        request()
        .then(data => !cancelled && setDataState(data))
        return () => cancelled = true
    }, [request])    
    return dataState
}
// хотя request - функция, всё равно [request]

const usePlanetInfo = (id) => {
    const request = useCallback(() => getPlanet(id), [id]) 
    // если id не изменится, то useCallback сохранит ссылку на старую ф-ию    
    // без этого функция будет пересоздаваться    
    return useRequest(request)
}

export const PlanetInfoHookUniversal = () => {
    const [id, setID] = useState(1)
    const data = usePlanetInfo(id)    
    return(
        <div style={{backgroundColor:"DarkOrange", padding: 10, width: '100%'}}>
        <h2>7-Создание универсального хука.</h2>
        <p>{id} -  Planet </p>
        <p>useCallback используют, когда хуки зависят от функции</p>
        <button onClick = {()=>{setID(i => i + 1)}}>ADD</button>
        <button onClick = {()=>{setID(i => i = 1)}}>RESET</button>
    </div>
    )
}