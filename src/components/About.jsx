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
        className="mt-4   max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.2, 2)}
      >
        I’m a final-year Software Engineering student at INSAT, looking for an
        end of study internship where I can put my skills to good use and keep
        learning.
      </motion.p>
      <motion.p
        className="mt-4  max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.5, 4)}
      >
        I already have some professional experience, so I know what it means to
        work on real projects with a team and face practical challenges. Over
        the years, I’ve explored different areas like blockchain security, data
        engineering, machine learning, large language models, medical imaging,
        bioinformatics, and image processing.
      </motion.p>
      <motion.p
        className="mt-4  max-w-[90%] leading-[30px]"
        variants={fadeIn("right", "spring", 0.8, 6)}
      >
        What motivates me most is tackling problems where data, AI, and
        optimization can make a real difference, whether that’s through
        research-driven work or more applied, hands on projects.
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
