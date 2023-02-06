import React from "react";
import {Helmet} from "react-helmet";
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

function Intro()
{
   return(
     
    <div class="me" >
    {Array(1).fill(void 0).map( (val, index) =>  
   <Zoom key={index}>
       <h1 id="see">Iam a Programmer </h1>
       <h2> and </h2>
       <br/>
       <p>Web Developer</p>
   </Zoom>)}
</div>
    );

}





export default Intro;