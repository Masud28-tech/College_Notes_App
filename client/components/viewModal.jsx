import { useContext, useEffect, useState } from "react";
import Image from 'next/image';

import { UserContext } from "../context/UserContext";
import { NotesContext } from "../context/NotesContext";

import PDFFIle from '../assets/pdf-file.png';
import ImageFile from '../assets/image-file.svg';
import PPTFile from '../assets/ppt-file.png';

import { TrimFileName } from "../utils/trimFileName";

const ViewModal = ({ setIsViewModalOpen, user }) => {
    const { topicSelected } = useContext(UserContext);
    const { setFileSelected, deleteNotesData } = useContext(NotesContext);

    const [activeCategory, setActiveCategory] = useState('Notes')

    const filteredNotes = topicSelected.topics.filter((item) => item.category === activeCategory);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }

    const handlePreviewNotes = (topic) => {
        setFileSelected(topic);

        var iframe = "<iframe width='100%' height='100%' src='" + topic.fileUrl + "'></iframe>"
        var x = window.open();
        x.document.open();
        x.document.write(iframe);
        x.document.close();
    }

    return (

        <div
            className="absolute justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                            {topicSelected.subject}: Study materials
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
                    <div className="grid grid-cols-3 gap-4 relative p-6 m-2 justify-center content-center">
                        {
                            filteredNotes.length > 0
                                ?
                                filteredNotes.map((topic, idx) =>
                                    <div key={idx} className="flex flex-col justify-center cursor-pointer">
                                        {
                                            topic.fileType === "PDF" &&
                                            <div
                                                className="relative bg-gray-200 p-2 m-2 rounded flex-1 justify-center border-2 hover:border-blue-700"
                                            >
                                                {
                                                    user?.userType === "teacher" &&
                                                    <div
                                                        className="absolute right-0 top-0 mx-2 p-1"
                                                        onClick={() => deleteNotesData(topicSelected, topic)}
                                                    >
                                                        <i className="fa fa-trash hover:text-red-500" aria-hidden="true"></i>
                                                    </div>
                                                }
                                                <div
                                                    onClick={() => handlePreviewNotes(topic)}
                                                >
                                                    <Image className="m-1" src={PDFFIle} alt="pdf-file" />
                                                    <p className="font-poppins font-semibold text-sm border-b-2 border-gray-400 mb-2">
                                                        {TrimFileName(topic.fileName)}
                                                    </p>
                                                    <p className='font-poppins font-bold text-xs text-red-700 mb-1 right-0'>
                                                        Uploaded On: &nbsp;
                                                        {topic?.date}
                                                    </p>
                                                </div>

                                            </div>
                                        }
                                        {
                                            topic.fileType === "Image" &&
                                            <div
                                                className="relative bg-gray-200 p-2 m-2 rounded flex-1 justify-center border-2 hover:border-blue-700"
                                            >
                                                {
                                                    user?.userType === "teacher" &&
                                                    <div
                                                        className="absolute right-0 top-0 mx-2 p-1"
                                                        onClick={() => deleteNotesData(topicSelected, topic)}
                                                    >
                                                        <i className="fa fa-trash hover:text-red-500" aria-hidden="true"></i>
                                                    </div>
                                                }
                                                <div
                                                    onClick={() => handlePreviewNotes(topic)}
                                                >
                                                    <Image className="m-1" src={ImageFile} alt="pdf-file" />
                                                    <p className="font-poppins font-semibold text-sm">
                                                        {TrimFileName(topic.fileName)}
                                                    </p>
                                                </div>

                                            </div>
                                        }
                                        {
                                            topic.fileType === "PPT" &&
                                            <div
                                                className="relative bg-gray-200 p-2 m-2 rounded flex-1 justify-center border-2 hover:border-blue-700"
                                            >
                                                {
                                                    user?.userType === "teacher" &&
                                                    <div
                                                        className="absolute right-0 top-0 mx-2 p-1"
                                                        onClick={() => deleteNotesData(topicSelected, topic)}
                                                    >
                                                        <i className="fa fa-trash hover:text-red-500" aria-hidden="true"></i>
                                                    </div>
                                                }
                                                <div
                                                    onClick={() => handlePreviewNotes(topic)}
                                                >
                                                    <Image className="m-1" src={PPTFile} alt="pdf-file" />
                                                    <p className="font-poppins font-semibold text-sm">
                                                        {TrimFileName(topic.fileName)}
                                                    </p>
                                                </div>

                                            </div>
                                        }

                                    </div>
                                )
                                :
                                <div className='m-2 p-2 text-xl font-poppins font-semibold '> No data available.</div>
                        }
                    </div>

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">

                        <button
                            className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsViewModalOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewModal;