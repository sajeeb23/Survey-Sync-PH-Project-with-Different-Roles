import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineLogin } from 'react-icons/ai';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Logged Out Successfully',
                    text: 'You have been successfully logged out.',
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="max-w-screen-lg mx-auto"> 
            <div className="navbar max-w-screen-lg mx-auto fixed z-10 bg-[#08a0e6] bg-opacity-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#08a0e6] rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#010102] text-white py-2 px-3"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/surveys"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#010102] text-white py-2 px-3"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                           Surveys
                        </NavLink>

                        <NavLink
                            to="/proUser"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#010102] text-white py-2 px-3"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Pro Membership
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#010102] text-white py-2 px-3"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-2 px-3"
                            }
                        >
                            Dashboard
                        </NavLink>
                        
                        </ul>
                    </div>
                    <Link className="flex justify-center items-center gap-2" to={'/'}>
                        <img src="https://i.ibb.co/S6wcs70/pngwing-com-43.png" className="w-8 lg:w-1/12" alt="" />
                        <a className="normal-case text-sm lg:text-xl font-bold">Survey<span className="text-sky-400">Sync</span></a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#110e08] text-white py-3 px-4"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-3 px-4"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/surveys"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#110e08] text-white py-3 px-4"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-3 px-4"
                            }
                        >
                            Surveys
                        </NavLink>

                        <NavLink
                            to="/proUser"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#110e08] text-white py-3 px-4"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-3 px-4"
                            }
                        >
                            Pro Membership
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? "pending"
                                    : isActive
                                        ? "bg-[#110e08] text-white py-3 px-4"
                                        : "bg-[#08a0e6] hover:text-gray-500 hover:underline text-white py-3 px-4"
                            }
                        >
                           Dashboard
                        </NavLink>
            
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <div className="justify-end md:flex lg:flex items-center mr-3">
                            <div className="w-full text-center mr-2 rounded-full">
                                <div className="hidden md:flex lg:flex justify-center items-center text-lg font-semibold text-center">
                                    {user?.displayName}
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="left-6 w-9 lg:w-11 rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/cJjvjgj/user.png"} alt="User" onError={(e) => e.target.src = "https://i.ibb.co/cJjvjgj/user.png"} />
                                </div>
                            </div>
                        </div>
                    ) : null}


                    {user ? (
                        <Link className="btn bg-[#08a0e6] h-2 text-white" onClick={handleSignOut}><RiLogoutCircleLine></RiLogoutCircleLine>LogOut</Link>
                    ) : (
                        <Link
                            to="/login"
                            className="btn bg-[#08a0e6] h-2 text-white"
                        >
                            <AiOutlineLogin></AiOutlineLogin>Login
                        </Link>
                    )}



                </div>
                
            </div>
        </div>
    );
};

export default Navbar;