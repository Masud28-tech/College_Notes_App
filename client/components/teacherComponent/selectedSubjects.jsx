import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import { NotesContext } from '../../context/NotesContext';

const SelectedSubjects = ({ selectedSemester, user, setIsViewModalOpen, setIsAddNotesModalOpen }) => {
    const { setTopicSelected } = useContext(UserContext);
    const { notesData } = useContext(NotesContext);

    const subjectsData = notesData.filter((item) => item.teacher.teacherName === user.teacherName && item.semester === selectedSemester);

    const handleView = (item) => {
        setTopicSelected(item);
        setIsViewModalOpen(true);
    }

    const handleAddNotes = (subject) => {
        setTopicSelected(subject);
        setIsAddNotesModalOpen(true);
    }


    return (
        <div className='grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4'>
            {
                subjectsData.map((subject) => (
                    <div className="bg-blue-600 flex flex-col w-auto min-h-full m-5 p-1 font-poppins font-semibold text-white hover:border border-white rounded" key={subject._id}>
                        <h1 className='m-2 text-2xl'> {subject.subject} </h1>

                        <div className='flex flex-row mx-2 mt-4'>
                            <button className='bg-green-600 p-2 m-1 w-1/8 hover:bg-black rounded cursor-pointer' onClick={() => handleView(subject)}>
                                View
                            </button>
                            <button className='bg-red-600 p-2 m-1 w-1/8 hover:bg-black rounded cursor-pointer' onClick={() => handleAddNotes(subject)}>
                                Add Notes
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>

    );
}

export default SelectedSubjects;
