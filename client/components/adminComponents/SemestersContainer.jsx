import React from 'react'

const SemistersContainer = ({ branch, handleSemesterSelector }) => {
    const semisters = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'];

    return (
        <div className="flex flex-col bg-blue-500 w-full h-full min-h-0 min-w-0 overflow-auto">
            {/* HEADER */}
            <div className='bg-gray-100 text-center text-2xl font-poppins font-bold m-2'>
                <h1 className='p-2'>Branch: {branch}</h1>
            </div>

            <div className='flex justify-center self-center'>
                <div className="flex-1 grid grid-cols-2 gap-4">
                    {
                        semisters.map((sem, idx) => (
                            <div
                                key={idx}
                                class="w-90 h-full py-2 px-8 cursor-pointer"
                                onClick={() => handleSemesterSelector(sem)}
                            >
                                <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                    <div class="py-3 px-6 border-b border-gray-300">
                                        Semester
                                    </div>
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    </a>
                                    <div class="p-6">
                                        <h5 class="text-gray-900 text-xl font-semibold mb-2 font-poppins">
                                            {sem} Semester
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default SemistersContainer;