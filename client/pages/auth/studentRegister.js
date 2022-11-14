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

import { UserContext } from '../../context/UserContext';
import { registerStudentRoute } from '../../utils/AllRoutes';
import Logo from '../../assets/sbjainlogo.png';


const StudentRegister = () => {
    const router = useRouter();
    const [studentName, setStudentName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [branch, setBranch] = useState('');
    const [semester, setSemester] = useState('');
    const [rollNumber, setRollNumber] = useState('');


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
        else if (studentName.length < 1) {
            toast.error("Student name can not be empty", toastOptions);
            console.log("Student name can not be empty");
            return false;
        }
        else if (!email.length) {
            toast.error("Please enter valid email id", toastOptions);
            console.log("Please enter valid email id");
            return false;
        }
        else if (email.length <= 12 || email.substring(email.length - 12, email.length) != "@sbjt.edu.in") {
            toast.error("Please enter valid email id , NOTE: Valid email must end with @sbjt.edu.in", toastOptions);
            console.log("Please enter valid email id , NOTE: Valid email must end with @sbjt.edu.in");
            return false;
        }

        return true;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (handleFormValidation()) {
            const { data } = await axios.post(registerStudentRoute, { studentName, email, branch,semester, rollNumber, password });

            if (!data.status) {
                toast.error(data.msg, toastOptions);
                console.log(data.msg);
            }
            else {
                localStorage.setItem("currentUser", JSON.stringify(data.student));
                // window.location.reload();
                router.push('/');
            }
        }
    }

    return (
        <>
            <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                    <Image src={Logo} alt="logo" className='mt-2' />

                    <h1 className="text-3xl font-semibold text-center  text-purple-900 uppercase pb-4 m-4">
                        Student Register
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="studentName"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Student Name
                            </label>
                            <input
                                type="text"
                                name="studentName"
                                value={studentName}
                                onChange={(e) => setStudentName(e.target.value)}
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
                                htmlFor="semester"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Semester
                            </label>
                            <select
                                type="text"
                                name="semester"
                                value={semester}
                                onChange={(e) => setSemester(e.target.value)}
                                required
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            >
                                <option>1st</option>
                                <option>2nd</option>
                                <option>3rd</option>
                                <option>4th</option>
                                <option>5th</option>
                                <option>6th</option>
                                <option>7th</option>
                                <option>8th</option>
                            </select>
                        </div>


                        <div className="mb-2">
                            <label
                                htmlFor="rollNumber"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Roll Number
                            </label>
                            <input
                                type="text"
                                name="rollNumber"
                                value={rollNumber}
                                onChange={(e) => setRollNumber(e.target.value)}
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
                            <Link href='/auth/teacherLogin'>
                                <strong>Teacher</strong>
                            </Link>
                        </button>
                        <button className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600">
                            <Link href='/auth/adminLogin'>
                                <strong>Admin</strong>
                            </Link>
                        </button>

                    </div>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link
                            href="/auth/studentLogin"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default StudentRegister;