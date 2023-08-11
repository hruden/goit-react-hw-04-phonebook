import { createContext, useEffect, useState } from "react";

export const Context = createContext()
const LS_KEY = 'contacts'


export function GlobalContext ({children}){
    const [contacts, setContacts] = useState(()=>JSON.parse(window.localStorage.getItem(LS_KEY))??[])
    const [searchContact, setSearchContact] = useState('');
    useEffect (()=>{
        window.localStorage.setItem(LS_KEY, JSON.stringify(contacts))
    }, [contacts])

    return <Context.Provider value={{contacts, setContacts, searchContact, setSearchContact}}>{children}</Context.Provider>
}