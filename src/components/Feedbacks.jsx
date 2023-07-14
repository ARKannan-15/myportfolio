import React from "react";
import { motion } from "framer-motion";
import techno from './techno.png';
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  // <motion.div
  //   variants={fadeIn("", "spring", index * 0.5, 0.75)}
  //   className=' rounded-2xl xs:px-16 px-6 sm:py-22 py-10 min-h-[300px]'
  // >
  <div className="w-full py-16">
   
    <div className='mt-1'>
    <div class="flex flex-wrap justify-center">
      <div class="w-6/12 sm:w-4/12 px-4">
        <img src={image} alt="..." class="shadow rounded max-w-full h-auto align-middle border-none" />
      </div>
    </div>
      <p className='flex flex-wrap justify-center text-white tracking-wider text-[24px]'>{testimonial}</p>

      <div className='flex flex-wrap justify-center mt-7 flex justify-between items-center gap-1'>
        <div className='flex flex-wrap justify-center flex-col flex-1'>
          <p className=' flex flex-wrap justify-center text-white font-medium text-[22px]'>
             {name}
          </p>
          <p className='mt-1 flex flex-wrap justify-center text-secondary text-[16px]'>
            {designation} of {company}
          </p>
        </div>

        
      </div>
    </div>
  </div>
  // </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Clubs and Activities</p>
          <h2 className={styles.sectionHeadText}>Teams and Clusters</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks,"");