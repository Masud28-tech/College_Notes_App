import { useState, useContext } from 'react';

import { NotesContext } from '../../context/NotesContext';


const AddCourseModal = ({ setIsAddCourseModalOpen, user, selectedSemester }) => {
    const { addNotesData, notesData } = useContext(NotesContext);
    const [subject, setSubject] = useState('');

    const handleAddCourse = async () => {
        await addNotesData(user.branch, selectedSemester, subject, user);
    }

    return (
        <div className="absolute justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
            {/*content*/}
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
                {/*header*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add a Subject In {selectedSemester} Semester of {user.branch} Branch.
                        </h3>
                    </div>

                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <form>
                            <div className="mb-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Enter the Subject/Course Name here:
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </form>
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleAddCourse}
                        >
                            Add
                        </button>
                        <button
                            className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsAddCourseModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCourseModal;