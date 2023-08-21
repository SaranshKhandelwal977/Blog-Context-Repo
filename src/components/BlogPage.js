import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import { useLocation, useNavigate} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import BlogDetails from "./BlogDetails";


const BlogPage = () => {
    const newBaseUrl = 'https://codehelp-apis.vercel.app/api/' 
    const[blog,setBlog] = useState(null);
    const[relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navi = useNavigate();
    const{loading,setLoading} = useContext(AppContext);

    const blogId= location.pathname.split('/').at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res = await fetch(url);
            const data= await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(err){
            console.log(err);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    },[location.pathname])

  return (
    <div className='py-20'>
        <Header></Header>
        <div className='flex justify-center  gap-x-8'>
            <button className='border rounded-md px-4 py-2' onClick={() => navi(-1)}>Back</button>
        </div>
        {
            loading ? <p>Loading</p> : blog ? (<div>
                <BlogDetails post={blog}></BlogDetails>
                <h2 className=' mx-auto mt-10 mb-6 text-xl font-bold w-[45%] underline'>Related Blogs</h2>
                {
                    relatedBlogs.map((post) => (
                        <div key={post.id}>
                            <BlogDetails post={post}></BlogDetails>
                        </div>
                    ))
                }
            </div>) :
            (<p> No Blog Found </p>) 
        }

    </div>
  )
}

export default BlogPage
