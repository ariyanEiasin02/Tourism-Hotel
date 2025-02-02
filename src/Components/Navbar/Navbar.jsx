import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { IoClose, IoMenu, IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);
    const [scroll,setScroll] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setScroll(window.scrollY > 10)
        })
    },[])

    return (
        <>
            <nav className={`py-3 shadow-md ${scroll ? "fixed top-0 left-0 w-full bg-[#20A9A9] z-50":""}`}>
                <div className="px-4 mx-auto max-w-container md:px-0">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <Link to="/">
                                <img src={logo} alt="Logo" className='w-12 h-auto' />
                            </Link>
                        </div>
                        <div className="relative flex items-center gap-x-16">
                            <div className="">
                            <ul className={`hidden md:flex gap-x-6 font-playfair font-semibold text-base text-primary`}>
                                <Link to='/'>
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>Home</li>
                                </Link>
                                <a to="/Home/About">
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>
                                    Hotel
                                    </li>
                                </a>
                                <a to="/Home/Blog">
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>Special offer</li>
                                </a>
                                <Link to="/hotelList">
                                
                               
                                <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>HotelList</li>
                               
                                </Link>
                                <a to='/Home/ShopGrid'>
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>Blog</li>
                                </a>
                                <a to="/Home/Contact">
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>Services</li>
                                </a>
                                <a to="/Home/Faq/">
                                    <li className={`${scroll ? "text-white hover:text-[#FCC752]" : "text-black hover:text-[#20A9A9]"}  cursor-pointer`}>Contact</li>
                                </a>
                               
                            </ul>
                            </div>
                            <div className="items-center hidden md:flex">
                                <input
                                    className="border-2 border-gray-200 w-[300px] h-10 outline-none text-primary font-lato px-3"
                                    type="search"
                                    placeholder="Search"
                                />
                                <button className={`${scroll ? "bg-[#FCC752]" : "bg-[#20A9A9]"} p-[10px]`}>
                                    <IoSearch className="text-xl font-semibold text-white" />
                                </button>
                            </div>
                            <button
                                className="text-3xl md:hidden"
                                onClick={() => setMenuShow(!menuShow)}
                            >
                                {menuShow ? <IoClose /> : <IoMenu />}
                            </button>
                        </div>
                    </div>
                    <div
                        className={`md:hidden flex flex-col items-start bg-[#20A9A9] shadow-lg absolute left-0 w-full px-4 py-3 gap-y-4 transition-all z-50 ${menuShow ? 'top-[63px] duration-700 ease-in-out' : 'top-[63px] left-[-800px] duration-700 ease-in-out'
                            }`}
                    >
                        <ul className="flex flex-col w-full text-base font-bold text-center gap-y-4 font-playfair text-primary">
                            <a to="/">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Home</li>
                            </a>
                            <a to="/Home/About">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Hotes</li>
                            </a>
                            <a to="/Home/Blog">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Special offer</li>
                            </a>
                            <a to="/HotelList">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">HotelList</li>
                            </a>
                            <a to='/Home/ShopGrid'>
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Blog</li>
                            </a>
                            <a to="/Home/Contact">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Services</li>
                            </a>
                            <a to="/Home/Faq/">
                                <li className="text-white hover:text-[#FCC752] cursor-pointer">Contact</li>
                            </a>
                        </ul>
                        <div className="relative flex items-center justify-center mx-auto mt-2">
                            <input
                                className="border-2 border-gray-200 w-[200px] h-10 outline-none text-primary font-lato px-3"
                                type="search"
                                placeholder="Search"
                            />
                            <button className="bg-[#FCC752] p-[10px]">
                                <IoSearch className="text-xl font-semibold text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Navbar;