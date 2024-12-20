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
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2 ">{description}</p>
        </div>
        <div className=" flex flex-wrap mt-4 gap-3  ">
          {tags.map((tag) => (
            <p key={tag.name}  className={`text-[14px]  ${tag.color}`} >#{tag.name}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.heroSubText}>my projects</p> */}
        <h2 className={styles.heroHeadText}>My projects.</h2>
      </motion.div>
      <div className="flex full-w">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("right", "tween", 0.5, 1)}
        >
          The following projects showcases my skills and experience through
          real-world examples.
           
          <br />Each project is accompanied with a small description and a
          link to the code repository. <br />
           {/* It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively. */}
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
