import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout"
import Home from "./Pages/Home.jsx"
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx";
import BlogPosts from "./Pages/BlogPost.jsx";
import Error from "./Pages/Error.jsx";
import BlogsDetail from "./Pages/BlogDetails.jsx";
import Categories from "./Pages/Categories.jsx";
import AnimeDetails from "./Pages/AnimeDetails.jsx";
import AnimeWatching from "./Pages/AnimeWatching.jsx";



const App = () => {

  return <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blogpost" element={<BlogPosts />} />
          <Route path="/blogpost" element={<Signup />} />
          <Route path="/blogdetails" element={<BlogsDetail/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/animedetails" element={<AnimeDetails/>} />
          <Route path="/animewatching" element={<AnimeWatching/>} />
          <Route path="/404" element={<Error/>}/>
        <Route path="*" element={<Navigate to={"/404"}/>}/>
        </Routes>
    
    
  </>
}

export default App