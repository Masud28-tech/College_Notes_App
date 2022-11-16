import { useState, useContext } from 'react'
import { Worker } from '@react-pdf-viewer/core'; // Import the main component
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css'; // Import the styles


import { NotesContext } from '../context/NotesContext';

const ViewNotesPage = () => {
    const { fileUploaded } = useContext(NotesContext);
    console.log(fileUploaded);

    return (
        <div className='pdf-container'>
            {/* show pdf conditionally (if we have one)  */}
            {fileUploaded
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
            {!fileUploaded &&
                <div className='flex flex-1 justify-center text-3xl bg-white'>
                    No pdf file selected
                </div>}
        </div>

    )
}

export default ViewNotesPage;