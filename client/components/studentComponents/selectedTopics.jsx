import { useState, useContext } from 'react';

import data from '../../data';
import { UserContext } from '../../context/UserContext';

const SelectedTopics = ({ selectedSubject, student }) => {
    // const {setTopicSelected} = useContext(UserContext);

    const clickHandler = (item) => {
        // setTopicSelected(item);
        // setIsViewModalOpen(true);
    }

    return (
        data.map((item) => (
            (item.subject === selectedSubject && item.branch === student.branch && item.semester == student.semester) &&
            <div className="bg-blue-600 w-90 m-5 p-2 font-poppins font-semibold text-white hover:border border-white" key={item.id}>

                {
                    item.topics.length
                        ?
                        (<>
                            <ol className="list-decimal m-2">
                                {item.topics.map((topic) => <li key={topic} className='m-5 text-xl'> {topic} </li>)}
                            </ol>
                            <div className='flex flex-row'>
                                <button className='bg-green-600 p-1 m-1 w-1/4 hover:bg-black' onClick={() => clickHandler(item)}>
                                    View
                                </button>
                            </div>
                        </>)
                        :
                        <div className='m-2 p-2 text-xl text-white font-poppins font-semibold '> No data available.</div>
                }

            </div>

        ))
    );
}

export default SelectedTopics;
