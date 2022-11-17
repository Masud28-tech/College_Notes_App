import { useState, useContext, useEffect } from 'react'
import { Worker } from '@react-pdf-viewer/core'; // Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import the styles

import { NotesContext } from '../context/NotesContext';



const ViewNotesPage = () => {
    const { fileSelected } = useContext(NotesContext);
    const [pdfFile, setPdfFile] = useState(null);


    if (!fileSelected)
        return <div>File Not Found!</div>

    const { fileName, fileType, fileUrl } = fileSelected;

    console.log(fileUrl);

    return (
        <div>
            <h1>File Viewer: Your file <strong>{fileName}</strong></h1>
            <h3>File type: {fileType}</h3>

            {
                <div className='flex flex-1'>
                    {/* show pdf conditionally (if we have one)  */}
                    <>
                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                            <div
                                style={{
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    height: '750px',
                                }}
                            >
                                <Viewer fileUrl={url} />
                            </div>
                        </Worker>

                    </>

                </div>
            }

        </div>
    )
}

export default ViewNotesPage;