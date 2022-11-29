import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import { NotesContext } from '../../context/NotesContext';

const SelectedSubjects = ({ selectedSemester, user, setIsViewModalOpen, setIsAddNotesModalOpen }) => {
    const { setTopicSelected } = useContext(UserContext);
    const { notesData } = useContext(NotesContext);

    const subjectsData = notesData.filter((item) => item?.teacher?.teacherName === user?.teacherName && item?.semester === selectedSemester);

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
            {/* {
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
            } */}
            {
                subjectsData.map((subject) => (
                    <div
                        key={subject._id}
                        className="w-90 h-full py-2 px-8 cursor-pointer"
                    >
                        <div className="block rounded-lg shadow-lg bg-white border-gray-900 hover:border-2">
                            <p className="py-1 px-6 border-b border-gray-300 font-bold">
                                Subject
                            </p>
                            <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                            </a>
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-semibold mb-4 font-poppins">
                                    {subject.subject}
                                </h5>

                                <div className='flex flex-row mt-8'>
                                    <button className='bg-green-600 text-white font-bold p-2 r-1 rounded cursor-pointer hover:bg-black hover:text-white'
                                        onClick={() => handleView(subject)}>
                                        View Notes
                                    </button>
                                    <button className='bg-red-600 text-white font-bold p-2 ml-1 rounded cursor-pointer hover:bg-black hover:text-white'
                                        onClick={() => handleAddNotes(subject)}>
                                        Add Notes
                                    </button>
                                </div>

                            </div>
                        </div>


                    </div>
                ))
            }
        </div>

    );
}

export default SelectedSubjects;
