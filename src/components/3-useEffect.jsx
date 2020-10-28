import React, { useEffect, useState } from "react"

export const EffectComponent = () => {
    const [value, setValue] = useState(0)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        console.log("useEffect() ")// комбинация componentDidMount and componentDidUpdate
        // вызов при монтировании и любом обновлении
    })
    useEffect(() => {
        console.log("useEffect() как componentDidMount ")
        // вызов только при монтировании 
    }, [])

    useEffect(()=>{
        console.log("useEffect() следит за изменением value")
    }, [value])

    useEffect(()=>{
        console.log("useEffect() перед очисткой")
        return () => {
            console.log("очистка useEffect()")
        }
    }, [value]) // второй клик: вначале очистка предидущего, затем новый вызов

    if(visible){
        return (
            <div style={{backgroundColor:"BlueViolet", padding: 10, width: '100%'}}>
                <h2>3-useEffect</h2>
                <h3>{value}</h3>
                <button onClick={()=>setValue(
                    v => v + 1
                )}>+</button>
                <button onClick = {() => setVisible(false)}>hide</button>
            </div>
        )
    }else{
        return <button onClick={() => setVisible(true)}>show</button>
    }

}