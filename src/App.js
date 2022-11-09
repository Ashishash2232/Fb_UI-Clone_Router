import React from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import MainCard from './Component/MainCard';
import Footer from './footer';
import Form from './Component/form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';
function App(){
    return(
        
        
        <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/home" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Request" element={<MainCard /> } />
            <Route path="/Form" element={<Form /> } />


          </Routes>
          <PostList/>
          <PostForm/>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>

        
    )
}
export default App