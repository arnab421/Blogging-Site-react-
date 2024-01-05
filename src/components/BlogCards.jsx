import React from 'react'
import { Link } from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
const BlogCards = ({ blogs,currentPage,selectedCategory,pageSize }) => {
    const filteredBlogs = blogs
    .filter((blogs)=> !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage -1 ) * pageSize,currentPage * pageSize);
    console.log(filteredBlogs);
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filteredBlogs &&
                filteredBlogs.map((blog, index) => {
                    const { id, image, title, author,published_date } = blog;
                    return (
                        <Link key={id} to={`/blogs/${id}`}
                        className='p-5 shadow-lg rounded cursor-pointer'>
                            <div>
                                <img src={image} alt="" className='w-full' />
                            </div>
                            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>
                                {title}
                            </h3>
                            <p className='mb-2 text-gray-600'>
                                <FaUser className='inline-flex items-center mr-2'/>{author}
                            </p>
                            <p className='text-sm text-gray-500'>
                                Published: {published_date}
                            </p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default BlogCards
