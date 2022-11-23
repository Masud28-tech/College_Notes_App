import React from 'react'

const AllBranches = ({ handleBranchSelector }) => {
    const branches = ['Computer Science', 'IT', 'Mechanical', 'Electrical Engineering', 'Electronics and Telecommunications', 'Civil Engineering', 'Artificial Inteligence'];


    return (
        <div className='flex flex-col bg-blue-500 w-full h-full min-h-0 min-w-0'>
            {/* HEADER */}
            <div className='bg-gray-100 text-center font-poppins font-bold m-2'>
                <h1 className='p-2 text-2xl border-b-2'>Welcome To "SBJAIN Nnotes Manager" App</h1>
                <h3 className='p-1 text-lg text-gray-800'>Select the branch</h3>
            </div>

            {/* CARDs GRID */}
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 bg-blue-500 w-full h-full min-h-0 min-w-0 overflow-hidden">

                {
                    branches.map((branch, idx) => (
                        <div
                            key={idx}
                            class="w-90 h-full py-2 px-8 cursor-pointer"
                            onClick={() => handleBranchSelector(branch)}
                        >
                            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                <div class="py-3 px-6 border-b border-gray-300">
                                    Branch
                                </div>
                                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                </a>
                                <div class="p-6">
                                    <h5 class="text-gray-900 text-xl font-semibold mb-2 font-poppins">
                                        {branch}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    )
}

export default AllBranches;