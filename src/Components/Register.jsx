import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="  py-8 ">
            <div className="w-full  font-serif max-w-md p-6 text-black m-auto mx-auto bg-gray-300 rounded-2xl shadow-md dark:bg-gray-800">
                <h2 className='text-2xl my-3 font-bold text-center'>PayNet</h2>
                <h2 className='text-2xl my-3 font-bold text-center'>Please SignUp.</h2>
                    <form className="bg-gray-300">
                        <div className="pb-2">
                            <label className="block text-sm text-black dark:text-gray-200">Name*</label>
                            <input type="text" name="name" placeholder="Enter your Name" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="pb-2">
                            <label className="block text-sm text-black dark:text-gray-200">Phone Number*</label>
                            <input type="number" name="phone" placeholder="Enter your Number" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="pb-2">
                            <label className="block text-sm text-black dark:text-gray-200">Email*</label>
                            <input type="email" name="email" placeholder="Enter your Email" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm text-black dark:text-gray-200">PIN*</label>
                            <input type="password" name="pin" placeholder="Enter your PIN" className="block w-full px-4 py-2 text-white bg-gray-600 border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div className="mt-6">
                            <button className="relative w-full inline-flex items-center justify-center border-2 px-6 py-3 overflow-hidden font-bold text-black rounded-md shadow-2xl group">
                                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-gray-500 via-[#1B1616] to-gray-500 group-hover:opacity-100"></span>
                                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                                <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                                <span className="relative">Sign UP</span>
                            </button>
                        </div>
                    </form>
                <p className="mt-8 text-xs font-light text-center text-black"> Already have an account? <Link to='/signIn' className="font-bold text-blue-700 dark:text-gray-200 hover:underline">Sign In</Link></p>
            </div>
        </div>
    );
};

export default Register;