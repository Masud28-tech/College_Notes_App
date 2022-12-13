import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify'; // For warning
import 'react-toastify/dist/ReactToastify.css';
const toastOptions = {
    position: 'upper-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
}

import { loginAdminRoute } from '../../utils/AllRoutes';
import { UserContext } from '../../context/UserContext';
import Logo from '../../assets/sbjainlogo.png'


const AdminLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setCurrentUser } = useContext(UserContext);

    const handleFormValidation = () => {
        if (password.length < 3) {
             toast.error("Password must have atleast 5 characters", toastOptions);
             return false;
         }
         else if (!email.length) {
             toast.error("Please enter valid email id", toastOptions);
             return false;
         }
         else if (email.length <= 13 || email.substring(email.length - 13, email.length) != "@sbjit.edu.in") {
             toast.error("Please enter valid email id , NOTE: Valid email must end with @sbjit.edu.in", toastOptions);
             alert("Please enter valid email id , NOTE: Valid email must end with @sbjit.edu.in");
             return false;
         }
         return true;
     }

    const handelLogin = async (e) => {
        e.preventDefault();
        if (handleFormValidation()) {

            const { data } = await axios.post(loginAdminRoute, { email, password });

            if (!data.status) {
                toast.error(data.msg, toastOptions);
            }
            else {
                localStorage.setItem("currentUser", JSON.stringify(data.admin));
                setCurrentUser(data.admin);
                // window.location.reload();
                router.push('/');
            }
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <Image src={Logo} alt="logo" className='mt-2' />

                <h1 className="text-3xl font-semibold text-center text-purple-900 uppercase pb-4 m-4">
                    Admin Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            onClick={handelLogin}
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button
                        type="button"
                        className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600"
                    >
                        <Link href='/auth/teacherLogin'>
                            <strong>Teacher</strong>
                        </Link>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                        <Link href='/auth/studentLogin'>
                            <strong>Student</strong>
                        </Link>
                    </button>

                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link
                        href="/auth/adminRegister"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminLogin;