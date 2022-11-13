import { useState } from 'react'
import Image from 'next/image';

import EditUserModal from '../components/EditUserModal';
import Logo from '../assets/logoHeader.jpg';

const AdminPage = ({ adminName }) => {
    const semesters = ['1st Semester', '2nd Semester', '3rd Semester', '4th Semester', '5th Semester', '6th Semester', '7th Semester', '8th Semester'];

    return (
        <section className="h-screen w-screen bg-gray-200 flex flex-col-reverse sm:flex-row min-h-0 min-w-0 overflow-hidden">

            <main className="sm:h-full flex-1 flex flex-col min-h-0 min-w-0 overflow-auto">
                <nav className="border-b bg-white px-6 py-2 flex items-center min-w-0 h-14">
                    <Image src={Logo} alt="logo" className='w-12 h-12 p-1 ml-2' />
                    <h1 className="font-semibold text-lg">{adminName}</h1>
                    <span className="flex-1"></span>
                    <span className="mr-2">
                        <input type="text" placeholder="Search"
                            className="w-full border-2 px-2 py-1 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100" />
                    </span>
                    <EditUserModal />
                </nav>
                <section className="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
                    <div className="flex flex-col lg:flex-row h-full w-full">

                        <div className="border pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap">

                            {/* <!-- SIDE BAR: SEMESTERS LISTED --> */}
                            {semesters && semesters.map((Sem) => (
                                <div key={Sem} className="bg-red-200 w-full h-24 min-h-0 min-w-0 mb-4 hover:bg-red-500 hover:text-gray-200">
                                    <p className='p-2 m-2 font-poppins font-semibold'>{Sem}</p>
                                </div>
                            ))}


                        </div>

                        <div className="border h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">

                            {/* <!-- overflow content right --> */}
                            <div className="bg-green-200 w-full h-full min-h-0 min-w-0 overflow-auto">
                                <div className="bg-pink-600 w-screen h-64"></div>
                                <div className="bg-blue-600 w-full h-64"></div>
                                <div className="bg-purple-600 w-screen h-64"></div>
                                <div className="bg-red-600 w-full h-64"></div>
                                <div className="bg-yellow-600 w-screen h-64"></div>
                                <div className="bg-green-600 w-full h-64"></div>
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

export default AdminPage;