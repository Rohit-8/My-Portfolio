import React from "react"
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";

// this component creates about section and service cards
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 1, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a driven and adaptable individual with expertise in Node.js, React.js, C++, Java, Spring Boot, and competitive programming. As a Computer Science and Engineering undergraduate from the esteemed Institute of Engineering and Technology, Lucknow, I possess a strong foundation in my field.
        Web development is my passion, and I take pleasure in crafting seamless and innovative websites. Alongside, I actively participate in coding competitions on platforms like Codeforces and Leetcode, constantly refining my problem-solving abilities.
        In pursuit of personal growth, I aspire to join a culturally diverse company that fosters continuous learning. I am eager to contribute my skills and enthusiasm to a team that values innovation and collaboration, as we shape the future of technology together. Let's create meaningful impact and drive success in the ever-evolving world of tech.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");
