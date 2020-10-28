import React, { useContext } from "react";

const MyContext = React.createContext();

const ElemChild = () => {
    const value = useContext(MyContext)
    return <span>{value}</span>
}

export const Child = () => {
    
    return(
        <MyContext.Provider value="Hello, people!">
            <div>
                <h2>2-useContext</h2>
                <ElemChild/>
            </div>
        </MyContext.Provider>
        
    )
}
