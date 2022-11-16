import { useContext, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import axios from "axios";

import { uploadPDFNotesRoute } from '../../utils/AllRoutes';
import { UserContext } from "../../context/UserContext";
import { NotesContext } from "../../context/NotesContext";

import { Worker } from '@react-pdf-viewer/core'; // Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import the styles


const AddNotesModal = ({ setIsAddNotesModalOpen }) => {

    const router = useRouter();
    const { topicSelected } = useContext(UserContext);

    const [category, setCategory] = useState('');
    const [fileType, setFileType] = useState('');
    const [fileName, setFileName] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [fileData, setFileData] = useState({ fileCategory: "", fileName: "", fileUrl: "", fileType: "", });

    const reqFileType = ['application/pdf'];

    const handleFileChange = (e) => {
        if (fileType === 'PDF') {
            let selectedFile = e.target.files[0];
            if (selectedFile) {
                if (selectedFile && reqFileType.includes(selectedFile.type)) {
                    let reader = new FileReader();
                    reader.readAsDataURL(selectedFile);
                    reader.onloadend = (e) => {
                        setPdfFile(e.target.result);
                    }
                }
                else {
                    setPdfFile(null);
                    console.log('Error: Please select valid pdf file');
                }
                setFileName(selectedFile.name);
            }
            else {
                console.log('select your file');
            }
        }
    }

    const handleFileSubmit = async (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            console.log({ topicSelected, category, fileType, fileName, pdfFile });
            const { data } = await axios.put(uploadPDFNotesRoute,
                { topicSelected, category, fileType, fileName, pdfFile });

            if (!data.status) {
                toast.error(data.msg);
                console.log("Error uploading PDF file", data.msg);
            }

            console.log(data.noteData);
        }
    }

    return (

        <div
            className="absolute justify-center items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold">
                            Add Notes in: {topicSelected?.subject}
                        </h3>
                        <h5 className="text-lg mt-2">Accepted format: .pdf/.png/.jpe</h5>
                    </div>

                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                        <form>
                            <div className="mb-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Select Category:
                                </label>
                                <select
                                    type="text"
                                    name="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >
                                    <option>Question paper</option>
                                    <option>Solved Papers</option>
                                    <option>Notes</option>
                                </select>
                            </div>



                            <div className="mb-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-lg font-semibold text-gray-800 fw-bold"
                                >
                                    File type?
                                </label>
                                <select
                                    type="text"
                                    name="fileType"
                                    value={fileType}
                                    onChange={(e) => setFileType(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                >
                                    <option>Image</option>
                                    <option>PDF</option>
                                    <option>PPT</option>
                                </select>
                            </div>

                            <div className="mb-2">
                                <label
                                    htmlFor="subject"
                                    className="block text-lg font-semibold text-gray-800"
                                >
                                    Upload file:
                                </label>
                                <input
                                    type="file"
                                    name="file"
                                    onChange={handleFileChange}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </form>
                    </div>


                    <div>
                        {/* show pdf conditionally (if we have one)  */}
                        {pdfFile
                            && <>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                                    <div
                                        style={{
                                            border: '1px solid rgba(0, 0, 0, 0.3)',
                                            height: '750px',
                                        }}
                                    >
                                        <Viewer fileUrl={pdfFile} />
                                    </div>
                                </Worker>
                            </>
                        }

                        {/* if we dont have pdf or viewPdf state is null */}
                        {!pdfFile &&
                            <div className='flex flex-1 justify-center text-xl bg-white'>
                                No pdf file selected
                            </div>}
                    </div>


                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleFileSubmit}
                        >
                            Upload
                        </button>
                        <button
                            className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setIsAddNotesModalOpen(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddNotesModal;