import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [topicSelected, setTopicSelected] = useState(null);

    useEffect(() => {
        setCurrentUser(() => JSON.parse(localStorage.getItem('currentUser')))
    }, [])

    return (
        <UserContext.Provider value={{ currentUser, setCurrentUser, topicSelected, setTopicSelected }}>
            {children}
        </UserContext.Provider>
    )
}