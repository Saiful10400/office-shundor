import { Link } from 'react-router-dom';
import logo from '../../../assets/images/sundorban.png';
import { FaBars } from "react-icons/fa";


const Navbar = () => {

    const navLinks = <>
        <li className='font-semibold mr-12 hover:underline'><Link to={"/"}>Home</Link></li>
        <li className='font-semibold mr-12 hover:underline'><a>News</a></li>
        <li className='font-semibold mr-12 hover:underline'><a>Contact Us</a></li>
        <li className='font-semibold mr-12 hover:underline'><a>Order</a></li>
        <li className='font-semibold text-base hover:underline'><a>Sectors</a></li>
        <li className='font-semibold text-base hover:underline'><Link to="/bookings">Bookings</Link></li>
    </>
    const navLinksRight=<>
    <li className=' mr-12 hover:underline'><Link to={""}>Sectors</Link></li>
    <li className=' mr-12 hover:underline'><Link to={"/bookings"}>Booking</Link></li>
    <li className=' mr-12 hover:underline'><Link to={""}>Contact Us</Link></li>
    </>
    const navLinksLeft=<>
    <li className=' mr-12 hover:underline'><Link to={"/"}>Home</Link></li>
    <li className=' mr-12 hover:underline'><Link to={""}>News</Link></li>
    <li className=' mr-12 hover:underline'><Link to={""}>Order</Link></li>
    </>

    return (
        <div className="lg:w-full mx-auto sticky top-0 left-0 z-10 text-white lg:left-0">
            
            <div className="flex justify-center relative h-[110px] items-end p-[17px]  text-white lg:left-0 lg:w-full lg:px-20 mx-auto bg-gradient-to-r from-[#E67E22] to-[#C8102E]">
                <button className='absolute top-3 right-5 text-white font-bold text-[20px]'>Login</button>
                {/* nav bar for desktop */}
               <div className='w-full'>
                <ul className='flex justify-center text-[20px] font-normal items-center'>{navLinksLeft}</ul>
               </div>
               <img className='rounded-full absolute left-[calc(52%-100px)] top-[20px] w-[130px] h-[130px]' src={logo} alt="logo" />
               <div className='w-full'>
                <ul className='flex justify-center text-[20px] font-normal items-center'>{navLinksRight}</ul>
               </div>
               
            </div>
        </div>
    );
};

export default Navbar;