import React, { useContext } from "react";

const MyContext = React.createContext();

const ElemChild = () => {
    const value = useContext(MyContext)
    return <span>{value}</span>
}

export const Child = () => {
    
    return(
        <MyContext.Provider value="Hello, people!">
            <div style={{backgroundColor:"tomato", padding: 10, width: '100%',}}>
                <h2>2-useContext</h2>
                <ElemChild/> 
            </div>
        </MyContext.Provider>
        
    )
}
