import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify'; // For warning & Alert
import 'react-toastify/dist/ReactToastify.css';
const toastOptions = {
    position: 'upper-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark',
}

import { registerTeacherRoute } from '../../utils/AllRoutes'
import { UserContext } from '../../context/UserContext';
import Logo from '../../assets/sbjainlogo.png';

const TeacherRegister = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [branch, setBranch] = useState('');
    const { setCurrentUser } = useContext(UserContext);

     // FORM VALIDATION FUCNTION
     const handleFormValidation = () => {

        if (password !== confirmPassword) {
            toast.error("Password and Confirm Password are not same!", toastOptions);
            console.log("Password and Confirm Password are not same!");
            return false;
        }
        else if (password.length < 5) {
            toast.error("Password must have atleast 5 characters", toastOptions);
            console.log("Password must have atleast 5 characters");
            return false;
        }
        else if (teacherName.length < 1) {
            toast.error("Teacher name can not be empty", toastOptions);
            console.log("Teacher name can not be empty");
            return false;
        }
        else if (!email.length) {
            toast.error("Please enter valid email id", toastOptions);
            console.log("Please enter valid email id");
            return false;
        }
        else if (email.length <= 13 || email.substring(email.length - 13, email.length) != "@sbjit.edu.in") {
            toast.error("Please enter valid email id , NOTE: Valid email must end with @sbjit.edu.in", toastOptions);
            console.log("Please enter valid email id , NOTE: Valid email must end with @sbjit.edu.in");
            return false;
        }

        return true;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (handleFormValidation()) {
            const { data } = await axios.post(registerTeacherRoute, { teacherName, email, branch, password });

            if (!data.status) {
                toast.error(data.msg, toastOptions);
                console.log(data.msg);
            }
            else {
                setCurrentUser(data.teacher);
                localStorage.setItem("currentUser", JSON.stringify(data.teacher));
                // window.location.reload();
                router.push('/');
            }
        }
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <Image src={Logo} alt="logo" className='mt-2' />

                <h1 className="text-3xl font-semibold text-center  text-purple-900 uppercase pb-4 m-4">
                    Teacher Register
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="teacherName"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Teacher Name
                        </label>
                        <input
                            type="text"
                            name="teacherName"
                            value={teacherName}
                            onChange={(e) => setTeacherName(e.target.value)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
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
                                htmlFor="branch"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Branch
                            </label>
                            <select
                                type="text"
                                name="branch"
                                value={branch}
                                onChange={(e) => setBranch(e.target.value)}
                                required
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                <option>Choose Your Brnach</option>
                                <option>Computer Science</option>
                                <option>IT</option>
                                <option>Mechanical</option>
                                <option>Electrical Engineering</option>
                                <option>Electronics and Telecommunications</option>
                                <option>Civil Engineering</option>
                                <option>Artificial Inteligence</option>
                            </select>
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
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
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
                            onClick={handleSignUp}
                        >
                            Register
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
                        <Link href='/auth/adminLogin'>
                            <strong>Admin</strong>
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
                    Already have an account?{" "}
                    <Link
                        href="/auth/teacherLogin"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default TeacherRegister;