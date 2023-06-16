import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomeMain from '../pages/home/HomeMain';
import Articles from '../pages/article/Articles';
import ScrollToTop from './Use';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Setroute = () => {
  return (
    <div>
             <ScrollToTop>
        {/* header */}
        <Navbar />
        
        <Routes>
       
            <Route path="/" element={<HomeMain/>}/>
            <Route path="/article" element={<Articles/>}/>
         
           
         
        </Routes>
        {/* footer */}
        <Footer/>
        
     
      </ScrollToTop>
    </div>
  )
}

export default Setroute