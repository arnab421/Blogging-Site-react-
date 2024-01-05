import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaFacebook, FaXmark } from "react-icons/fa6";
import { FaSquareDribbble } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [ismodalopen, setismodalopen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    // navitems
    const navitems = [
        {
            path: "/",
            link: "Home"
        },
        {
            path: "/about",
            link: "About"
        },
        {
            path: "/contact",
            link: "Contact"
        },
        {
            path: "/services",
            link: "Services"
        },
        {
            path: "/blogs",
            link: "Blogs"
        }
    ]
    // modal details
    const openModal = () => {
        setismodalopen(true);

    }
    const closeModal = () => {
        setismodalopen(false);
    }

    // modal details
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>
                <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span>
                </a>
                {/* navigate for large devices */}
                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navitems.map(({ path, link }) => {
                            return (
                                <li className='text-white' key={path}>
                                    <NavLink className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? "pending"
                                                : ""
                                    }
                                        to={path}>
                                        {link}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* menu icons */}
                <div className='text-white lg:flex gap-4 items-center hidden'>
                    <a href='/' className='hover:text-orange-500'>
                        <FaFacebook />
                    </a>
                    <a href='/' className='hover:text-orange-500'>
                        <FaSquareDribbble />
                    </a>
                    <a href='/' className='hover:text-orange-500'>
                        <FaTwitter />
                    </a>
                    <button onClick={openModal} className='bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>
                        Log in
                    </button>
                </div>
                {/* Modal show */}
                <Modal isOpen={ismodalopen} onClose={closeModal}/>
                {/* Modal show */}
                {/* mobile menu btn, display mobile screen */}
                <div className='md:hidden'>
                    <button className='cursor-pointer' onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }

                    </button>
                </div>

            </nav>
            {/* menu item only for mobile */}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                    {
                        navitems.map(({ path, link }) => {
                            return (
                                <li className='text-black' key={path}>
                                    <NavLink onClick={toggleMenu} to={path}>
                                        {link}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </header>
    )
}

export default Navbar
