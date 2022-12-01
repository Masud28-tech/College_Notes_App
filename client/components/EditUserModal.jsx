const EditUserModal = () => {

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        window.location.reload();
    }


    return (
        <div
            className="absolute justify-end items-center flex overflow-x-hidden overflow-y-auto inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="absolute -top-1 w-auto my-1 mx-1  max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-xl font-semibold"> Setting </h3>

                        <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                X
                            </span>
                        </button>
                    </div>

                    {/*body*/}
                    <div className="m-2 px-2 relative flex">

                        <div className="m-2">
                            <button
                                className="border-none bg-transparent text-red-500 active:bg-emerald-600 font-semibold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EditUserModal;
