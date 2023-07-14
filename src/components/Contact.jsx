import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";

import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  
  return (
    <div
      className={`xl:mt-12  overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' rounded-2xl sm:px-16 px-6 sm:py-16 py-10 min-h-[310px]'
      >
        <div class="commonbox contact ">
          <p class={styles.sectionSubText}>Let's connect! </p><br/><h1 className={styles.sectionHeadText} > Contact.</h1>
          <div class="links">
            <a class="email" href="mailto:kannanar464@gmail.com">Email</a><br/><br/>
            <a class="insta" href="https://www.instagram.com/kannan.ar_15/">Instagram</a><br/><br/>
            <a class="linkedin" href="https://www.linkedin.com/in/ar-kannan">LinkedIn</a>
          </div>
        </div>
        
        
      </motion.div>

      

    </div>
  );
};

export default SectionWrapper(Contact, "contact");