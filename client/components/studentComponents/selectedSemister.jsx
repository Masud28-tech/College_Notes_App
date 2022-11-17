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
        <div className='grid grid-cols-3 minmd:grid-cols-3 sm:grid-cols-2 min-w:grid-cols-1 gap-4 rounded'>
            {
                subjectsData.map((subject) => (
                    <div className="bg-blue-600 w-100 m-5 p-2 font-poppins font-semibold text-white hover:border border-white rounded" key={subject._id}>
                        <h1 className='m-2 text-2xl'> {subject.subject} </h1>

                        <div className='flex flex-row mx-2 mt-4'>
                            <button className='bg-green-600 p-2 m-1 w-1/2 rounded cursor-pointer hover:bg-black' onClick={() => handleView(subject)}>
                                View
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SelectedSemister;
