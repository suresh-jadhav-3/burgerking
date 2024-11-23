
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import { FaUser  } from "react-icons/fa";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavLinks = [
        { id: 1, title: "Home", link: "/" },
        { id: 2, title: "About", link: "/about" },
        { id: 3, title: "Menu", link: "/menu" }
    ];

    return (
        <div className='shadow-xl' >
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center'>
                    {/* Logo Section */}
                    <div className='flex items-center gap-2'>
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='w-16' />
                        </Link>
                    </div>
                    {/* Link Section */}
                    <div className='flex justify-between items-center gap-4'>
                        <ul className='hidden md:flex items-center gap-4'>
                            {NavLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.link} className='inline-block text-black py-4 px-4 hover:text-primary duration-300'>{link.title}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className='hidden md:flex items-center gap-3'>
                            <Link to="/cart" className='bg-gradient-to-r from-primary to-secondary text-white text-2xl px-4 py-1 rounded-full hover:scale-105 duration-200'>
                                <IoCart />
                            </Link>
                            <Link className='bg-gradient-to-r from-primary to-secondary text-white text-2xl px-4 py-1 rounded-full hover:scale-105 duration-200'>
                                <FaUser  />
                            </Link>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className='md:hidden mr-5'>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoClose className='text-5xl' /> : <IoMenu className='text-5xl' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Links - Show when the menu is open */}
                {isOpen && (
                    <div className='flex flex-col items-center mt-4'>
                        <ul className='flex flex-col items-center mt-4'>
                            {NavLinks.map((link) => (
                                <li key={link.id} className='py-2'>
                                    <Link to={link.link} className='text-black hover:text-primary duration-300'>
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex flex-col gap-2'>
                            <Link to="/cart" className='bg-gradient-to-r from-primary to-secondary text-white text-2xl px-4 py-1 rounded-full hover:scale-105 duration-200'>
                                <IoCart />
                            </Link>
                            <Link className='bg -gradient-to-r from-primary to-secondary text-white text-2xl px-4 py-1 rounded-full hover:scale-105 duration-200'>
                                <FaUser  />
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;