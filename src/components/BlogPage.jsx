import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const pageSize = 12
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setactiveCategory] = useState(null);
  const getblogdata = (
    async () => {
       try{
        let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
        if(selectedCategory){
            url +=`&category=${selectedCategory}`;
        }
        const res = await axios.get(url);
        console.log(res.data);
        setBlogs(res.data);
       }
       catch(error){
        setError(error.message);
       }
    }
  )
  useEffect(()=>{
    getblogdata();
  },[currentPage,pageSize,selectedCategory]);
  //   page changing button
  const handlePageChange = (pageNumber) =>{
    setcurrentPage(pageNumber);
  }
   //   page changing button
   // category changing button 
   const handleCategoryChange = (category) =>{
    setSelectedCategory(category);
    setcurrentPage(1);
    setactiveCategory(category);
   }
   // category changing button

  return (
    <>
    {error !== "" && <h2>{error}</h2>}
    <div>
        {/* category section */}
         <div>
            <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
         </div>
        {/* category section */}
        {/* Blogcards */}
        <div className='flex flex-col lg:flex-row gap-12'>
            <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
            {/* sidebar */}
            <div>
             <SideBar/>
            </div>
            {/* sidebar */}
         </div>
        {/* Blogcards */}
        {/* pagination */}
         <div className='page'>
           <Pagination blogs={blogs} onPageChange={handlePageChange} currentPage={currentPage} pageSize={pageSize}/>
         </div>
        {/* pagination */}
    </div>
    </>
    
  )
}

export default BlogPage
