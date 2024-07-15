
import { Link } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import toast from "react-hot-toast";
// import useStudent from "../Hooks/useStudent";
// import useAdmin from "../Hooks/useAdmin";
// import useTutor from "../Hooks/useTutor";

const Navber = () => {
    // const { user, logOutUser } = useAuth()
    // const [isStudent] = useStudent()
    // const [isTutor] = useTutor()
    // const [isAdmin] = useAdmin()
    // console.log(isStudent, isTutor, isAdmin);

    // const signOutUser = () => {
    //     logOutUser(() => {
    //         toast.success('Sign Out successfully')
    //     })
    // }
    return (
        <div className="navbar font-serif bg-gray-300 border-b py-3 px-5 md:px-12">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost font-bold text-xl md:text-3xl text-black"> PayNet </Link>
            </div>
            <div className="navbar-end">
                {
                     <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-14 rounded-full">
                                <img  alt="User Profile" src="" className="w-20" />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-gray-300 text-black font-bold rounded-box w-52">
                            {/* {user && isStudent && <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/view-booked-session' >Dashoard</Link></li>}
                            {user && isTutor && <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/create-session' >Dashoard</Link></li>} */}
                            { <li className='hover:bg-black hover:text-white rounded-full'><Link to='/dashboard/all-users' >Dashoard</Link></li>}
                            <li className='hover:bg-black hover:text-white rounded-full' ><Link to='/signIn'>Sign Out</Link></li>
                        </ul>
                    </div> 
                }
            </div>
        </div>
    );
};

export default Navber;