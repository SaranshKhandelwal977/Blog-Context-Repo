import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import TagPage from "./components/TagPage";
import CategoryPage from "./components/CategoryPage";
export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  const[searchParams, setSearchParams] =  useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes("tags")){
      //means tag vaala page show krna hai
      const tag = location.pathname.split('/').at(-1).replaceAll('-', ' ');  //last vaale slash ke baad ki value nikal ke le aao
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/blog/:blogId" element={<BlogPage/>}></Route>    {/* blogId is dynamic mtlb ye apne aap hi change hoga*/}
      <Route path="/tags/:tag" element={<TagPage/>}></Route>
      <Route path="/categories/:category" element={<CategoryPage/>}></Route>
    </Routes>
  );
}
