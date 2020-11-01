/* eslint-disable */
import React, { useEffect, useState } from "react"

export const Notification = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setVisible(false)
        },2500)
        return () => clearTimeout(timeout)
    }, [])// не зависит от данных, запуск при старте, поэтому []
    return(
    <div style={{backgroundColor:"Aqua", padding: 10, width: '100%'}}>
        <h2>4-useEffect example.</h2>
        {visible && (<p>Hello, через 2.5 сек я пропаду! &#9200;</p>)}
        {!visible && (<p>Предидущий элемент пропал &#129313;</p>)}
    </div>
    )
}