import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'

const SideBar = () => {
    const [popularBlogs, setpopularBlogs] = useState([]);
    const [iserror, setiserror] = useState("");
    const getpopularblog = (async () => {
        try {
            const res = await axios.get('http://localhost:5000/blogs');
            // console.log(res.data);
            setpopularBlogs(res.data);
        }
        catch (error) {
            setiserror(error.message);
        }
    })
    useEffect(() => {
        getpopularblog();
    }, [])
    return (
        <div>
            {/* latest blogs */}
            <div>
                <h3 className='text-2xl font-semibold px-4'>
                    Latest Blogs
                </h3>
                <div>
                    {iserror !== "" && <h2>{iserror}</h2>}
                    {
                        popularBlogs &&
                        popularBlogs.slice(0, 5).map((blogs, index) => <div key={index}
                        className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blogs.title}</h4>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Learn More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                        </div>)
                    }
                </div>
            </div>
            {/* popular blogs */}
            <div>
                <h3 className='text-2xl font-semibold px-4 mt-20'>
                    Popular Blogs
                </h3>
                <div>
                    {iserror !== "" && <h2>{iserror}</h2>}
                    {
                        popularBlogs &&
                        popularBlogs.slice(6, 11).map((blogs, index) => <div key={index}
                        className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h4 className='font-medium mb-2'>{blogs.title}</h4>
                            <Link to="/" className='text-base pb-2 hover:text-orange-500 inline-flex items-center py-1'>
                                Learn More <FaArrowRight className='mt-1 ml-2' />
                            </Link>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar
