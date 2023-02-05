import React ,{useEffect,useState} from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Aboutme from './Aboutme/Aboutme';
import Intro from './Intro';
import Clubs from './Clubs';
import Work from './Work';
import Touch from './Touch';
import Home from './Home';


function App()
{
  
  return(
    <HashRouter>
   
     <Routes>
      <Route  path="/" element={<Home />} />  
      <Route path="/about" element={<Aboutme />} />   
      <Route path="/club" element={<Clubs />} /> 
      <Route path="/work" element={<Work />} />     
      <Route path="/contact" element={<Touch />}/>
      </Routes>
    
    </HashRouter>
    
  )
}

export default App;