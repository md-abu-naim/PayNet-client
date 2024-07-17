import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import AdminNavlinks from './Admin/AdminNavlinks';
// import AgentNavlinks from './Agent/AgentNavlinks';
import UserNavlinks from './User/UserNavlinks';

const Sideber = () => {
    const [isActive, setActive] = useState(false)


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <div>
            <>
                {/* Small Screen Navbar */}
                <div className='bg-gray-300 text-black flex justify-between items-center md:hidden'>
                    <div>
                        <div className='block cursor-pointer p-4 font-bold'>
                            <Link to='/' className='text-2xl text-black'>PayNet</Link>

                        </div>
                    </div>
                    <p className='text-black font-bold '>Balance: 5000 TK</p>
                    <button
                        onClick={handleToggle}
                        className='mobile-menu-button p-4 focus:outline-none focus:bg-[#bba684]'
                    >
                        <AiOutlineBars className='h-5 w-5' />
                    </button>
                </div>

                {/* Sidebar */}
                <div
                    className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden text-white bg-gray-300 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                        }  md:translate-x-0  transition duration-200 ease-in-out`}
                >
                    <div>
                        <div>
                            <div className='w-full hidden md:flex flex-col px-4 py-2 shadow-lg rounded-lg justify-center items-center mx-auto'>
                                <Link to='/' className='text-2xl font-bold text-black'>PayNet</Link>
                                <p className='text-black font-bold'>Balance: 5000 tk</p>
                            </div>
                        </div>

                        {/* Nav Items */}
                        <div className='flex flex-col justify-between flex-1 mt-6'>

                            {/*  Menu Items */}
                            {/* {user && isStudent && <StudentNavLinks />}
                            {user && isTutor && <TutorNavLinks />}
                            {user && isAdmin && <AdminNavLinks />} */}
                            
                            {/* <AdminNavlinks /> */}
                            {/* <AgentNavlinks /> */}
                            <UserNavlinks />
                        </div>
                    </div>

                    <div>
                        <hr />


                        {/* logout */}
                        <button
                            // onClick={logOutUser}
                            className='flex w-full items-center px-4 py-2 mt-5 text-black hover:text-white hover:bg-black transition-colors duration-300 transform'
                        >
                            <GrLogout className='w-5 h-5' />

                            <span className='mx-4 font-medium'>Logout</span>
                        </button>
                    </div>
                </div>
            </>
        </div>
    );
};

export default Sideber;