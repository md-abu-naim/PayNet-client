import { FaBangladeshiTakaSign } from "react-icons/fa6";
import profile from '../../assets/question mark.png'

const Overview = () => {
    return (
        <div className='flex justify-center items-center  h-screen'>
            <div className=' text-black shadow-lg border border-gray-300 rounded-2xl w-3/5'>
                <div className='w-full mb-4 bg-red-400 rounded-t-lg h-36'></div>
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={profile}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-gray-400 '
                        />
                    </a>

                    <p className='p-2 px-4 text-xs text-black bg-gray-400 rounded-full'>
                        Admin
                    </p>
                    <p className='text-black font-bold flex font-sans items-center'><FaBangladeshiTakaSign /> 5000 TK</p>
                    <p className='mt-2 text-2xl font-medium text-black '>
                        Farhan adnan farabi
                    </p>
                    <p className=''>
                        <span className="font-bold">Email: </span><span className=''>farhanadnanfarabi@gmail.com</span>
                    </p>
                    <p>Phone: <span className="font-sans">01882585833</span></p>
                    <p>ID: 00000000000000000000000000000000</p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-around text-sm text-white  '>
                            <button className='bg-gray-400 px-10 py-1 rounded-lg text-black cursor-pointer hover:bg-[#c7a675] block mb-1'>
                                Update Profile
                            </button>
                            <button className='bg-gray-400 px-7 py-1 rounded-lg text-black cursor-pointer hover:bg-[#bc9c6c]'>
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;