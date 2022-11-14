import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import { NotesContext } from '../../context/NotesContext';

const SelectedSubjects = ({ selectedSemester, user, setIsViewModalOpen }) => {
    const {setTopicSelected} = useContext(UserContext);
    const {notesData} = useContext(NotesContext);

    const subjectsData = notesData.filter((item) => item.teacher.teacherName === user.teacherName && item.semester === selectedSemester);

    const clickHandler = (item) => {
        setTopicSelected(item);
        setIsViewModalOpen(true);
    }


    return (
        subjectsData.map((subject) => (
            <div className="bg-blue-600 w-90 m-5 p-2 font-poppins font-semibold text-white hover:border border-white" key={subject._id}>
                <h1 className='mb-5 text-2xl'> {subject.subject} </h1>

                <div className='flex flex-row'>
                    <button className='bg-green-600 p-2 m-1 w-1/8 hover:bg-black' onClick={() => clickHandler(subject)}>
                        View
                    </button>
                    <button className='bg-red-600 p-2 m-1 w-1/8 hover:bg-black'>
                        Add Notes
                    </button>
                </div>
            </div>
        ))
    );
}

export default SelectedSubjects;
// console.log(item.teacher, user.teacherName, item.semester)
