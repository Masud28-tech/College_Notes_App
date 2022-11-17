import { useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import { NotesContext } from '../../context/NotesContext';

const SelectedSemister = ({ selectedSemester, user, setIsViewModalOpen }) => {
    const { notesData } = useContext(NotesContext);
    const { setTopicSelected } = useContext(UserContext);

    const subjectsData = notesData.filter((item) => item.semester === selectedSemester);

    const handleView = (subject) => {
        setTopicSelected(subject);
        setIsViewModalOpen(true);
    }

    return (
        subjectsData.map((subject) => (
            <div className="bg-blue-600 w-90 m-5 p-2 font-poppins font-semibold text-white hover:border border-white" key={subject._id}>
                <h1 className='mb-5 text-2xl'> {subject.subject} </h1>

                <div className='flex flex-row'>
                    <button className='bg-green-600 p-2 m-1 w-full hover:bg-black' onClick={() => handleView(subject)}>
                        View
                    </button>
                </div>
            </div>
        ))
    );
}

export default SelectedSemister;
