import React, { useState } from "react";

const Context = React.createContext();

export function UserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => JSON.parse(window.sessionStorage.getItem('currentUser')))

    return <Context.Provider value={{ currentUser, setCurrentUser }}>
        {children}
    </Context.Provider>
}
export default Context;