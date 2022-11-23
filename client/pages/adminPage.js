import { useState } from 'react'
import Image from 'next/image';

import EditUserModal from '../components/EditUserModal';
import Logo from '../assets/logoHeader.jpg';
import AllBranches from '../components/adminComponents/AllBranches';
import SemestersContainer from '../components/adminComponents/SemestersContainer';
import DataContainer from '../components/adminComponents/DataContainer';

const AdminPage = ({ user }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [isBranchSelected, setIsBranchSelected] = useState(false);
    const [selectedSemister, setSelectedSemister] = useState(null);
    const [isSemesterSelected, setIsSemesterSelected] = useState(false);
    const handleEditUserToggler = () => setIsEditModalOpen(!isEditModalOpen);

    const handleBranchSelector = (branch) => {
        setIsBranchSelected(true);
        setSelectedBranch(branch);
    }

    const handleSemesterSelector = (sem) => {
        setIsSemesterSelected(true);
        setSelectedSemister(sem);
    }

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">
            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">

                {/* NAVBAR */}
                <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-15">
                    <Image src={Logo} alt="logo" className='w-12 h-13 p-1 m-3' />
                    <h1 className="font-semibold text-2xl">
                        Admin Logged In: Prof. <span className='text-red-800'>{user.adminName}</span>
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

                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0 relative">
                    <div className="flex flex-col lg:flex-row h-full w-full">

                        {/* <!-- CONTENT --> */}

                        <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0 ">
                            {
                                !isBranchSelected && <AllBranches handleBranchSelector={handleBranchSelector} />
                            }

                            {
                                isBranchSelected && !isSemesterSelected && <SemestersContainer branch={selectedBranch} handleSemesterSelector={handleSemesterSelector} />
                            }

                            {
                                isBranchSelected && isSemesterSelected && <DataContainer branch={selectedBranch} semister={selectedSemister} />
                            }
                        </div>


                        {/* LOGOUT AND EDIT USER DATA MODAL */}
                        {isEditModalOpen && <EditUserModal />}


                    </div>
                </section>


                <footer className="px-6 py-3 border-t flex w-full items-end">
                    <p className="text-gray-600">Made by @SB Jain Students</p>
                    <div className="flex-1"></div>
                    <button
                        className="shadow-md border rounded-full ml-2 w-10 h-10 text-center leading-none text-green-200 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                        <i className="fas fa-question fill-current"></i>
                    </button>
                </footer>
            </main>
        </section>
    );
}

export default AdminPage;