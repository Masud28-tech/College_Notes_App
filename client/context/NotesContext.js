import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import { addNotesDataRoute, fetchNotesDataRoute, deleteNotesDataRoute } from '../utils/AllRoutes';

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
    const [notesData, setNotesData] = useState([]);
    const [fileSelected, setFileSelected] = useState(null);

    useEffect(() => {
        fetchNotesData();
    }, [])


    const addNotesData = async (branch, semester, subject, user) => {
        const { data } = await axios.post(addNotesDataRoute, { branch, semester, subject, user });

        if (!data.status) {
            console.log(data.msg);
        }
        else {
            setNotesData(data.noteData);
            window.location.reload();
        }
    }

    const fetchNotesData = async () => {
        const { data } = await axios.get(fetchNotesDataRoute);
        if (!data.status) {
            console.log(data.msg);
        }
        else {
            const newData = Object.values(data.notesData);
            setNotesData(newData);
        }
    }

    const deleteNotesData = async (topicSelected, topic) => {
        const res = await axios.put(deleteNotesDataRoute, { topicSelected, topic });
        if (!res.status) {
            console.log(res.msg);
        }
        else {
            console.log("File deleted Successfully");
            window.location.reload();
        }
    }

    return (
        <NotesContext.Provider value={{ notesData, setNotesData, addNotesData, fetchNotesData, deleteNotesData, fileSelected, setFileSelected }}>
            {children}
        </NotesContext.Provider>
    )
}