import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { textVariant } from "../utils/motion";
const fadeIn = (direction, easing, delay, duration) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? 100 : -100, // Adjust the start position
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: easing || "spring", // Use spring for smoother animations
      damping: 25, // Adds smoothness to the spring effect
      stiffness: 200, // Controls the speed of the spring motion
      delay: delay || 0,
      duration: duration || 1, // Duration of the fade-in effect
    },
  },
});

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={` ${styles.paddingX} absolute inset-0  top-[80px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div>
          <div className="flex  flex-row items-center">
            <div className="w-5 h-5 rounded-full bg-[#c27ba0] mr-[20px] "></div>

            <h1 className={` ${styles.heroHeadText} text-white `}>
              Hi, I'm <span className="text-[#c27ba0] ">Farah</span>
            </h1>
            <div className="w-5 h-5 rounded-full bg-[#c27ba0] ml-[20px] "></div>
          </div>

          <div>
            <motion.div
              variants={fadeIn("right", "spring", 0.1, 2.5)}
              initial="initial"
              animate="animate"
              className=" text-[18px] "
            >
              Just an engineer, a bonsai, and a bunch of projects — come hang{" "}
            </motion.div>

            <motion.div
              variants={fadeIn("right", "spring", 0.6, 2.5)}
              initial="initial"
              animate="animate"
              className=" pt-[10px] text-[14px]"
            >
              Why the bonsai? Because building software (and life) is all about
              patience, curiosity, and a little bit of daily growth.
            </motion.div>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div style={{ height: "30px" }}></div>

      <div
        className=" xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20 relative "
        style={{ marginTop: "-20px" }}
      >
        <a href="#about">
          <div className="w-[32px] h-[55px]  rounded-3xl border-2 border-secondary flex justify-center items-start p-2  ">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full  bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
