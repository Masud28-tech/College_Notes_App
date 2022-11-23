import { useState } from 'react';
import Image from 'next/image';

import { TrimFileName } from '../../utils/trimFileName';

import PDFFIle from '../../assets/pdf-file.png';
import ImageFile from '../../assets/image-file.svg';
import PPTFile from '../../assets/ppt-file.png';

const SubjectData = ({ filterData, selectedSubject, handleSubjectSelector }) => {


    const [activeCategory, setActiveCategory] = useState('Notes')

    const filteredNotes = selectedSubject.topics.filter((item) => item.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }

    const handlePreviewNotes = (topic) => {
        var iframe = "<iframe width='100%' height='100%' src='" + topic.fileUrl + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }


    return (
        <div className='flex flex-row w-full h-full overflow-auto'>
            {/* <!-- SIDE BAR: SEMESTERS LISTED --> */}
            <div className="w-1/3 mx-1 mb-1 bg-white">
                <div className='bg-gray-800 w-full h-18 m-1 min-h-0 min-w-0 mb-2'>
                    <h2 className='font-semibold font-poppins text-lg text-white p-2'>Subjects</h2>
                </div>
                {filterData && filterData.map((item, idx) => {
                    return <div
                        key={idx}
                        className={`bg-gray-300 m-1 p-1 w-full h-20 min-h-0 min-w-0 cursor-pointer hover:bg-blue-900 hover:text-gray-100 ${selectedSubject === item ? 'bg-blue-900 text-gray-100' : ''}`}
                        onClick={() => handleSubjectSelector(item)}>
                        <p className='p-1 m-1 font-poppins font-semibold text-lg'>{item.subject}</p>
                    </div>
                })}
            </div>


            {/* CONTENT: NOTES-DATA */}
            <div className="bg-white mx-1 mb-1 w-full">
                {/*header*/}
                <div className="p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                        {selectedSubject.subject}: Study materials
                    </h3>
                </div>

                {/* CATEGORY SHIF BAR */}
                <div className="text-sm font-poppins font-semibold text-gray-500 flex flex-row justify-center p-2 m-1">
                    <span className={`p-2 hover:text-black hover:border-blue-900 border-b-4 cursor-pointer ${activeCategory === 'Notes' ? 'text-black border-black border-b-4' : ''}`}
                        onClick={() => handleCategoryChange('Notes')}
                    >
                        Notes &nbsp; &nbsp; |
                    </span>
                    <span className={`p-2  hover:text-black hover:border-blue-900 border-b-4 cursor-pointer ${activeCategory === 'Question paper' ? 'text-black border-black border-b-4' : ''}`}
                        onClick={() => handleCategoryChange('Question paper')}
                    >
                        Question papers &nbsp; |
                    </span>
                    <span className={`p-2  hover:text-black hover:border-blue-900 border-b-4 cursor-pointer ${activeCategory === 'Solved Papers' ? 'text-black border-black border-b-4' : ''}`}
                        onClick={() => handleCategoryChange('Solved Papers')}
                    >
                        Solved Papers
                    </span>
                </div>

                {/*body*/}
                <div className="grid grid-cols-3 gap-4 p-6 m-2 justify-center content-center">
                    {
                        filteredNotes.length > 0
                            ?
                            (
                                filteredNotes.map((topic, idx) =>
                                    <div key={idx} className="flex flex-col justify-center cursor-pointer">
                                        {
                                            topic.fileType === "PDF" &&
                                            <div
                                                onClick={() => handlePreviewNotes(topic)}
                                                className="bg-gray-200 p-2 m-2 rounded flex-1 justify-center border-2 hover:border-blue-700"
                                            >

                                                <Image className="m-1" src={PDFFIle} alt="pdf-file" />
                                                <p className="font-poppins font-semibold text-sm border-b-2 border-gray-400 mb-2">
                                                    {TrimFileName(topic.fileName)}
                                                </p>
                                                <p className='font-poppins font-bold text-xs text-red-700 mb-1 right-0'>
                                                    Uploaded by: &nbsp;
                                                    {selectedSubject.teacher.teacherName}
                                                </p>

                                            </div>
                                        }
                                        {
                                            topic.fileType === "Image" &&
                                            <div
                                                onClick={() => handlePreviewNotes(topic)}
                                                className="bg-gray-200 p-2 m-2 rounded flex-1 justify-center">
                                                <Image className="m-1" src={ImageFile} alt="pdf-file" />
                                                <p className="font-poppins font-semibold text-sm">
                                                    {TrimFileName(topic.fileName)}
                                                </p>
                                            </div>
                                        }
                                        {
                                            topic.fileType === "PPT" &&
                                            <div className="bg-gray-200 p-2 m-2 rounded flex-1 justify-center">
                                                <Image className="m-1" src={PPTFile} alt="pdf-file" />
                                                <p className="font-poppins font-semibold text-sm">
                                                    {TrimFileName(topic.fileName)}
                                                </p>
                                            </div>
                                        }

                                    </div>
                                )
                            )
                            :
                            <div className='m-2 p-2 text-xl font-poppins font-semibold '> No data available.</div>
                    }
                </div>
            </div>
        </div>

    )
}

export default SubjectData;