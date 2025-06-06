import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { sectionWrapper } from "../hoc";
import { projects } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] h-[500px] w-full"
        options={{ max: 40, scale: 1, speed: 450 }}
      >
        <div className="relative full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 justify-end flex card-img_hover m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex justify-center h-10 w-10 rounded-full items-center  cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-5/6 h-5/6 object-contain transition-transform duration-300 hover:scale-150"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-col ">
          <div className="flex flex-row justify-between">
            <div className="text-white font-bold text-[24px]">{name}</div>
            {live_link && (
              <div className=" flex card-img_hover m-3">
                <div
                  onClick={() => window.open(live_link, "_blank")}
                  className="pink-gradient opacity-50 hover:opacity-80 hover:scale-105 flex justify-center text-[12px] italic p-[5px] items-center rounded-[10px] cursor-pointer"
                >
                  see live link!
                </div>
              </div>
            )}
          </div>
          <p className="text-secondary text-[14px] mt-2 ">{description}</p>
        </div>
        <div className=" flex flex-wrap mt-4 gap-3  ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px]  ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.heroHeadText}> Projects That I’ve Brought to Life</h2>
      </motion.div>
      <div className="flex flex-col full-w">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
          From sketchy ideas on paper to full-on interactive experiences — here’s a glimpse into the digital stuff I’ve built.
        </motion.p>
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("right", "tween", 1, 1)}
        >
          Whether solo hacking at midnight or teaming up for bigger challenges, each project taught me something new.
        </motion.p>
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("right", "tween", 1.5, 1)}
        >
          Every card below comes with a quick peek + a code link if you’re curious to dive deeper 
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default sectionWrapper(Works, "");


