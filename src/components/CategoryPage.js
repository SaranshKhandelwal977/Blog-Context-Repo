import React from 'react'
import Header from './Header'
import Pagination from './Pagination'
import Blogs from './Blogs'
import { useLocation, useNavigate} from 'react-router-dom'

const CategoryPage = () => {
    const navi = useNavigate()
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div className='py-20'>
        <Header></Header>
        <div className='flex justify-center items-center gap-x-8'>
          <div>
            <button className='border rounded-md px-4 py-2' onClick={() => navi(-1)}>Back</button> 
          </div>
          <div>
            <h2>Blogs on <span>{category}</span></h2>
          </div>
        </div>
        <Blogs></Blogs>
        <Pagination></Pagination>
    </div>
  )
}

export default CategoryPage
