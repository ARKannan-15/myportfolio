import React ,{useEffect,useState} from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import Aboutme from './Aboutme/Aboutme';
import Intro from './Intro';
import Club from './Club';
import Work from './Work';
import Touch from './Touch';
import Home from './Home';


function App()
{
  
  return(
    <HashRouter>
   
     <Routes>
      <Route exact path="/" element={<Home />} />  
      <Route path="/about" element={<Aboutme />} />   
      <Route path="/work" element={<Work />} />     
      <Route path="/contact" element={<Touch />}/>
      </Routes>
    
    </HashRouter>
    
  )
}

export default App;