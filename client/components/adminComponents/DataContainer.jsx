import { useContext, useState } from 'react';
import { NotesContext } from '../../context/NotesContext';
import SubjectData from './SubjectData';

const DataContainer = ({ branch, semister }) => {
    const { notesData } = useContext(NotesContext);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [isSubjectSelected, setIsSubjectSelected] = useState(false);

    const filterData = notesData.filter((item) => item.branch === branch && item.semester === semister);

    const handleSubjectSelector = (subject) => {
        setIsSubjectSelected(true);
        setSelectedSubject(subject);
    }

    return (
        <div className='flex h-full w-full'>
            <div className="flex flex-col bg-blue-500 w-full h-full min-h-0 min-w-0">
                {/* HEADER */}
                <div className='bg-gray-100 text-center font-poppins font-bold m-2'>
                    <h1 className='p-2 text-2xl'>Branch: {branch}</h1>
                    <h3 className='p-1 text-lg text-gray-800'>" {semister} Semister "</h3>
                </div>

                {
                    !isSubjectSelected
                        ? (
                            <div className='flex justify-center self-center'>
                                <div className="grid grid-cols-2 gap-4">
                                    {
                                        filterData.map((item, idx) => (
                                            <div
                                                key={idx}
                                                class="w-90 h-full py-2 px-8 cursor-pointer"
                                            >
                                                <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center" onClick={() => handleSubjectSelector(item)}>
                                                    <div class="py-3 px-6 border-b border-gray-300">
                                                        Subject
                                                    </div>
                                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                    </a>
                                                    <div class="p-6">
                                                        <h5 class="text-gray-900 text-xl font-semibold mb-2 font-poppins">
                                                            {item.subject}
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                        : (
                            <SubjectData filterData={filterData} selectedSubject={selectedSubject} handleSubjectSelector={handleSubjectSelector} />
                        )
                }

            </div>


            {/* <!-- SIDE BAR: SEMESTERS LISTED --> */}
            <div className="overflow-auto border p-2 mr-2 w-1/6 lg:pb-0 border-black bg-gray-300 lg:max-w-sm flex flex-row lg:flex-col flex-wrap lg:flex-nowrap overflow-y-auto">
                <div className='m-2 font-bold'>Teachers alloted</div>

                {filterData.map(({ teacher, subject }, idx) => (
                    <div key={idx} className="bg-white w-full min-h-0 min-w-0 mb-4 p-1 rounded">
                        <div class="border-b border-gray-300 mb-1">
                            <h5 class="text-gray-900 text-xl font-bold mb-2 font-poppins">
                                {teacher.teacherName}
                            </h5>
                            <p className='font-semibold text-sm text-red-900'>@{subject}</p>
                        </div>
                        <div className='font-poppins font-semibold text-xs'>
                            📧:{teacher.email}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DataContainer;