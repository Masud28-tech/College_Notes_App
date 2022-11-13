import { useState, useContext } from 'react';

import data from '../../data';
import { UserContext } from '../../context/UserContext';

const SelectedSubjects = ({ selectedSemester, user, setIsViewModalOpen }) => {
    const {setTopicSelected} = useContext(UserContext);

    const clickHandler = (item) => {
        setTopicSelected(item);
        setIsViewModalOpen(true);
    }

    return (
        data.map((item) => (
            (item.teacher === user.teacherName && item.branch === user.branch && item.semester == selectedSemester) &&
            <div className="bg-blue-600 w-90 m-5 p-2 font-poppins font-semibold text-white hover:border border-white" key={item.id}>
                <h1 className='mb-5 text-2xl'> {item.subject} </h1>

                <div className='flex flex-row'>
                    <button className='bg-green-600 p-1 m-1 w-1/4 hover:bg-black' onClick={() => clickHandler(item)}>
                        View
                    </button>
                    <button className='bg-red-600 p-1 m-1 w-1/4 hover:bg-black'>
                        Add Notes
                    </button>
                </div>
            </div>
        ))
    );
}

export default SelectedSubjects;
// console.log(item.teacher, user.teacherName, item.semester)
