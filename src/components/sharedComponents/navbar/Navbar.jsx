import { Link } from 'react-router-dom';
import logo from '../../../assets/images/sundorban.png';
import { FaBars } from "react-icons/fa";


const Navbar = () => {

    const navLinks = <>
        <li className='font-semibold mr-12 text-base hover:underline'><a>Home</a></li>
        <li className='font-semibold mr-12 text-base hover:underline'><a>News</a></li>
        <li className='font-semibold mr-12 text-base hover:underline'><a>Contact Us</a></li>
        <li className='font-semibold mr-12 text-base hover:underline'><a>Order</a></li>
        <li className='font-semibold text-base hover:underline'><a>Sectors</a></li>
        <li className='font-semibold text-base hover:underline'><Link to="/bookings">Bookings</Link></li>
    </>

    return (
        <div className="lg:w-full mx-auto bg-transparent lg:absolute z-10 text-white lg:left-0">
            {/* <div className="my-3 hidden lg:flex lg:justify-end pr-20">
                <button className="bg-orange-400 text-black font-semibold rounded-sm mr-6 px-8 py-2">Sign Up</button>
                <button className="bg-orange-400 text-black font-semibold rounded-sm mr-2 px-8 py-2">Login</button>
            </div> */}
            <div className="navbar absolute z-10 text-white lg:left-0 lg:w-full lg:px-20 mx-auto hover:bg-gradient-to-r from-[#202120] to-[#323432]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden absolute -bottom-7 -right-[405px]">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                            <FaBars />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content dropdown-end left-48 mt-4 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 text-black">
                            {navLinks}
                            {/* <hr />
                            <div className="my-3 lg:hidden flex flex-col justify-start">
                                <button className="bg-orange-400 text-black font-semibold rounded-sm mb-3 px-6 py-2">Login</button>
                                <button className="bg-orange-400 text-black font-semibold rounded-sm px-6 py-2">Sign Up</button>
                            </div> */}
                        </ul>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img src={logo} alt="" className='w-[50px] h-[50px] lg:ml-16 ml-3 rounded-full' />
                        {/* <a className="text-xl font-semibold">Sundarban</a> */}
                    </div>
                    {/* <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul> */}
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;