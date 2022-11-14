import { useState, useContext } from 'react'
import Image from 'next/image';

import data from '../data';
import Logo from '../assets/logoHeader.jpg';
import { NotesContext } from '../context/NotesContext';

import SelectedSubjects from '../components/teacherComponent/selectedSubjects';
import EditUserModal from '../components/EditUserModal';
import ViewModal from '../components/teacherComponent/viewModal';
import AddCourseModal from '../components/teacherComponent/addCourseModal';

const TeacherPage = ({ user }) => {
    const { notesData } = useContext(NotesContext);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);

    const handleSemesterChange = (sem) => {
        setIsSelected(true);
        setSelectedSemester(sem);
    }

    const handleEditUserToggler = () => setIsEditModalOpen(!isEditModalOpen);
    const handleAddCourseToggler = () => setIsAddCourseModalOpen(!isAddCourseModalOpen);


    const techersNotesData = notesData.filter((item) => item.teacher.teacherName === user.teacherName)
    const semestersData = [
        ...new Set(techersNotesData.map((ele) => ele.semester))
    ];

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">

            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-15">
                    <Image src={Logo} alt="logo" className='w-12 h-13 p-1 m-3' />
                    <h1 className="font-semibold text-2xl">
                        Teacher Logged In: <span className='text-red-800'>{user.teacherName}</span>
                    </h1>
                    <span className="flex-1"></span>

                    <span className="mr-2">
                        <input type="text" placeholder="Search"
                            className="w-full border-2 px-2 py-1 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
                    </span>

                    <button
                        className="border rounded-full ml-2 w-10 h-10 text-center leading-none text-gray-200 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        type="button"
                        onClick={handleEditUserToggler}
                    >
                        <i className="fas fa-cog fill-current"></i>
                    </button>
                </nav>


                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                    <div className="flex flex-col lg:flex-row h-full w-full">

                        {/* <!-- SIDE BAR: SEMESTERS LISTED --> */}
                        <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">

                            {semestersData && semestersData.map((semester) => {
                                    return <div key={semester} className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4 hover:bg-red-600 hover:text-gray-200" onClick={() => handleSemesterChange(semester)}>
                                        <p className='p-2 m-2 font-poppins font-semibold text-xl'>{semester} Semester</p>
                                    </div>
                            })}


                        </div>

                        {/* <!-- overflow content right --> */}
                        <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0 relative">

                            <div className="bg-blue-500 w-full h-full min-h-0 min-w-0 overflow-auto">
                                {/* LOGOUT AND EDIT USER DATA MODAL */}
                                {isEditModalOpen && <EditUserModal />}

                                {
                                    !isSelected
                                        ? <div className='flex flex-1 justify-center mt-10 p-2 text-3xl text-white font-poppins font-bold '> No semester selected.</div>
                                        : <SelectedSubjects selectedSemester={selectedSemester} user={user} setIsViewModalOpen={setIsViewModalOpen} />

                                }

                                {
                                    isViewModalOpen && <div className="flex justify-center items-center mt-2">
                                        <ViewModal setIsViewModalOpen={setIsViewModalOpen} />
                                    </div>
                                }

                                {/* MODAL TO ADD SUBJECT IN SELECTED SEMESTER */}
                                {isAddCourseModalOpen && <AddCourseModal setIsAddCourseModalOpen={setIsAddCourseModalOpen} user={user} selectedSemester={selectedSemester} />}



                                {/* ADD COURSE/SUBJECT BUTTON */}
                                <div className="justify-end items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none">
                                    <button
                                        onClick={handleAddCourseToggler}
                                        disabled={!isSelected}
                                        className="absolute top-25 bottom-20 right-12 my-12 mx-auto max-w-3xl shadow-md rounded-full ml-2 w-14 h-14 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:border-transparent">
                                        <i className="fas fa-plus fill-current"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>




                <footer className="px-6 py-3 border-t flex w-full items-end">
                    <p className="text-gray-600">Made by @SB Jain Students</p>
                    <div className="flex-1"></div>
                    <button
                        className="shadow-md ml-auto border rounded-full ml-2 w-10 h-10 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <i className="fas fa-question fill-current"></i>
                    </button>
                </footer>
            </main>
        </section>
    );
}

export default TeacherPage;