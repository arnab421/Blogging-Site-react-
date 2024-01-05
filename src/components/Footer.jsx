import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6"
const Footer = () => {
  return (
    <div className='bg-gray-900'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
         <div className='grid mb-8 lg:grid-cols-6'>
            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Category</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                News
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                world
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Games
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                References
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                web
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                ecommerce
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                business
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Etertainment
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                portfolio
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Media
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                brochure
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                nonprofit
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='font-medium tracking-wide text-gray-300'>Business</p>
                    <ul className='mt-2 space-y-2'>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Information
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Personal
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Wiki
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                Forum
                            </a>
                        </li>
                        <li>
                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>
                                projects
                            </a>
                        </li>
                    </ul>
                </div> 
            </div> 
            {/* subscription */}
            {/* <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                    <p className='font-medium tracking-wide text-gray-300'>suscribe for updates</p>
                    <form className='mt-4'>
                        <input type="email" name="email" id="email" className='flex-grow w-full h-12 px-4 mb-3 trasition duration-2 bg-white boder-gray-300 shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none'/>
                    </form>
            </div> */}
            {/* subscription */}
         </div>
         {/* copyright */}
         <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
            <p className='text-sm text-gray-500'>©Copyright 2023 | All right reserved</p>
            <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                  <FaTwitter className='h-6 w-6'/>
                </a> 
                <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                  <FaInstagram className='h-6 w-6'/>
                </a> 
                <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-500'>
                  <FaFacebook className='h-6 w-6'/>
                </a>
            </div>
         </div>

      </div>
    </div>
  )
}

export default Footer
