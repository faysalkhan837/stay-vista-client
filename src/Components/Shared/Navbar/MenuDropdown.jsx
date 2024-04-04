import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import avaterImg from "../../../assets/images/placeholder.jpg";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";

const MenuDropdown = () => {
    const [isopen, setIsopen] = useState(false);
    const { user, logOut } = UseAuth();

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                {/* Became a host button */}
                <div className="hidden md:block">
                    <button className="disabled:cursor-not-allowed cursor-pointer bg-neutral-100
                     py-3 px-4 text-sm font-semibold rounded-full transition">
                        Host your home
                    </button>
                </div>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsopen(!isopen)}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row 
                items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <AiOutlineMenu></AiOutlineMenu>
                    <div className="hiden md:block">
                        {/* Avatar */}
                        <img
                            className="rounded-full"
                            referrerPolicy="no-referrer"
                            src={user && user.photoURL ? user.photoURL : avaterImg}
                            alt="profile"
                            width='30'
                            height='30'
                        />
                    </div>
                </div>
            </div>
            {isopen && (
                <div className="absolute shadow-md rounded-xl w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <Link to='/' className="block md:hidden px-4 py-3 hover:bg-neutral-100 font-semibold transition">
                            Home
                        </Link>
                        {
                            user ? <>
                                <Link to='/dashbord' className="px-4 py-3 hover:bg-neutral-100 font-semibold transition">
                                    Dashbord
                                </Link>
                                <div onClick={logOut} className="px-4 py-3 hover:bg-neutral-100 font-semibold transition">
                                    LogOut
                                </div>
                            </> :
                                <>
                                    <Link to='/login' className="px-4 py-3 hover:bg-neutral-100 font-semibold transition">
                                        Login
                                    </Link>
                                    <Link to='/signup' className="px-4 py-3 hover:bg-neutral-100 font-semibold transition">
                                        Sign Up
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuDropdown;