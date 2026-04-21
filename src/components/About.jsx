import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { sectionWrapper } from "../hoc";
import Lottie from "lottie-react";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" w-full xs:w-[250px]">
      <motion.div
        className="w-full green-pink-gradient p-1 rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 1 * index, 1)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
          options={{ max: 45, scale: 2, speed: 2000 }}
        >
          {/* <img src={icon} alt={title} className="w-16 h-16 object-contain" /> */}
          <div className="overflow-visible">
            <Lottie
              // lottieRef={lottieRef}
              animationData={icon}
              loop={true}
              autoplay={true}
              className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px]"
            />
          </div>
          <h3 className=" text-center text-white text-[16px]">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <h2 className={styles.heroHeadText}>A bit about me </h2>
      </motion.div>

      <motion.p
        className="mt-4 max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.2, 2)}
      >
        Currently, I’m an AI research intern at LaBRI (Laboratoire Bordelais de
        Recherche en Informatique), where I work on building modern tools around
        code review in the era of AI agents. This is my end-of-studies
        internship at INSAT, and I will be graduating in September 2026.
      </motion.p>

      <motion.p
        className="mt-4 max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.5, 4)}
      >
        I’ve already gained professional experience working on real-world
        projects, collaborating within teams, and dealing with practical
        challenges beyond just theory.
      </motion.p>

      <motion.p
        className="mt-4 max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.8, 6)}
      >
        Over time, I’ve explored a range of areas in AI, including Agentic AI,
        RAG, NLP, image processing, machine learning, and medical imaging. I’ve
        also worked on topics beyond AI such as blockchain security, data
        engineering, data science, bioinformatics, and web development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default sectionWrapper(About, "about");
