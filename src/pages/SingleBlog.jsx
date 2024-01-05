import React from 'react'
import { useLoaderData } from 'react-router-dom'
import {FaUser} from "react-icons/fa";
import { FaClock } from 'react-icons/fa6';
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date,reading_time,content} = data[0];
  return (
    <div>
       <div className='py-40 bg-black text-center text-white px-4'>
          <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Single Blog Page</h2>
       </div>
       {/* Blog Details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12'>
              <div className='lg:w-3/4 mx-auto'>
                 <div>
                     <img  src={image} alt="" className='w-full mx-auto rounded'/>
                 </div>
                 <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>
                 <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
                 <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                 <p className='text-base text-gray-500 mb-5'>{content}</p>
                 <div className='text-base text-gray-500 mb-5'>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p><br/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p><br/>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                 </div>
                 
              </div>
              <div className='lg:w-1/2'>
                    <SideBar/>
              </div>
        </div>
       {/* Blog Details */}
       
    </div>
  )
}

export default SingleBlog
