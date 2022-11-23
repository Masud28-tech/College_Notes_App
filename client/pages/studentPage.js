import { useContext, useState } from 'react';
import Image from 'next/image';

import { NotesContext } from '../context/NotesContext';

import ViewModal from '../components/viewModal';
import EditUserModal from '../components/EditUserModal';
import SelectedSemister from '../components/studentComponents/selectedSemister';

import Logo from '../assets/logoHeader.jpg';

const StudentPage = ({ user }) => {
    const { notesData } = useContext(NotesContext);

    const semestersData = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

    const [dataAvailable, setDataAvailable] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [selectedSemester, setSelectedSemester] = useState(null);

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);


    const handleEditUserToggler = () => setIsEditModalOpen(!isEditModalOpen);

    const handleSemesterChange = (sem) => {
        console.log(sem);
        setIsSelected(true);
        setSelectedSemester(sem);
        let flag = false;
        notesData.map((item) => {
            if (item.semester === sem) {
                setDataAvailable(true);
                flag = true;
            }
        })
        if (!flag) setDataAvailable(false);
    }


    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">

            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">

                {/* NAVBAR */}
                <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-15">
                    <Image src={Logo} alt="logo" className='w-12 h-13 p-1 m-3' />

                    <h1 className="font-semibold text-2xl">
                        Student Logged in: <span className='text-red-800'>{user.studentName}</span>
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


                {/* BODY */}
                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                    <div className="flex flex-col lg:flex-row h-full w-full">

                        {/* <!-- SIDE BAR: SEMESTERS LISTED --> */}
                        <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">

                            <div className='bg-gray-800 w-full h-14 min-h-0 min-w-0 mb-2 rounded flex justify-center'>
                                <h2 className='font-semibold font-poppins text-lg text-white m-1'>{user.branch}</h2>
                            </div>

                            {semestersData && semestersData.map((semester) => {
                                return <div
                                    key={semester}
                                    className={`bg-white w-full h-24 min-h-0 min-w-0 mb-4 rounded cursor-pointer hover:bg-blue-900 hover:text-gray-200 ${(semester === selectedSemester) ? 'text-gray-200 transition ease-in-out delay-150 bg-blue-800 ' : ''}`}
                                    onClick={() => handleSemesterChange(semester)}>
                                    <p className='p-2 m-2 font-poppins font-semibold text-xl'>{semester} Semester</p>
                                </div>
                            })}

                        </div>


                        {/* <!-- overflow content right --> */}
                        <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0 relative">
                            <div className="bg-blue-500 w-full h-full min-h-0 min-w-0 overflow-auto">
                                {/* HEADER */}
                                <div className='bg-gray-100 text-center font-poppins font-bold m-2 rounded'>
                                    <h1 className='p-2 text-xl font-poppins font-semibold'>
                                        {selectedSemester} Semister: {user.branch}
                                    </h1>
                                </div>

                                {/* LOGOUT AND EDIT USER DATA MODAL */}
                                {isEditModalOpen && <EditUserModal />}

                                {
                                    !isSelected ?
                                        (
                                            <div className='flex flex-1 justify-center mt-10 p-2 text-3xl text-white font-poppins font-bold '>
                                                No semester selected.
                                            </div>
                                        )

                                        : (
                                            <SelectedSemister selectedSemester={selectedSemester} user={user} setIsViewModalOpen={setIsViewModalOpen} />
                                        )

                                }

                                {/* MODAL OF VIEW-TOPICS : VIEW BUTTON RESULT */}
                                {
                                    isViewModalOpen && <div className="flex justify-center items-center mt-2">
                                        <ViewModal setIsViewModalOpen={setIsViewModalOpen} />
                                    </div>
                                }


                            </div>
                        </div>


                        {/* WHEN NO DATA SUBJECTS ADDED IN SELECTED SEMESTER  */}
                        {
                            !dataAvailable
                            &&
                            <div className='bg-blue-500 w-full h-full min-h-0 min-w-0 overflow-auto flex justify-center relative'>
                                {/* LOGOUT AND EDIT USER DATA MODAL */}
                                {isEditModalOpen && <EditUserModal />}

                                <div className='mt-12 text-4xl font-poppins font-semibold text-white'> No data available.</div>
                            </div>
                        }


                    </div>
                </section>



                {/* FOOTER */}
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

export default StudentPage;