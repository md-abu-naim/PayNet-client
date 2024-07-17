import {  FaUsers } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { RiFileHistoryFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const AdminNavlinks = () => {
    return (
        <nav className='text-white'>
            {/* Overview */}
            <NavLink
                to='overview'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <CgProfile className='w-5 h-5' />

                <span className='mx-4 font-medium'>Overview</span>
            </NavLink>

            {/* All Transaction history */}
            <NavLink
                to='all-history'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <RiFileHistoryFill className='w-5 h-5' />

                <span className='mx-4 font-medium'>All Transaction History</span>
            </NavLink>
            {/* My History */}
            <NavLink
                to='history'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <FaHistory className='w-5 h-5' />

                <span className='mx-4 font-medium'>My History</span>
            </NavLink>
            {/* View all users */}
            <NavLink
                to='all-users'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <FaUsers className='w-5 h-5' />

                <span className='mx-4 font-medium'> All Users </span>
            </NavLink>
        </nav>
    );
};

export default AdminNavlinks;