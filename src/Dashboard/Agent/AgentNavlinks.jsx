import { NavLink } from "react-router-dom";
import { FaHistory } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsCashCoin } from "react-icons/bs";
import { IoCashOutline } from "react-icons/io5";

const AgentNavlinks = () => {
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

            {/* Cash-In Management */}
            <NavLink
                to='cash-in-management'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <BsCashCoin className='w-5 h-5' />

                <span className='mx-4 font-medium'>Cash-In Management</span>
            </NavLink>
            {/* Cash-Out Management */}
            <NavLink
                to='cash-out-management'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#0d0801]   hover:text-white ${isActive ? 'bg-gray-600  text-white' : 'text-black'
                    }`
                }
            >
                <IoCashOutline className='w-5 h-5' />

                <span className='mx-4 font-medium'>Cash-Out Management</span>
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
        </nav>

    );
};

export default AgentNavlinks;