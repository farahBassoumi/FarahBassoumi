import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants/constants";
import { sectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Lottie from "lottie-react";
import sparkles from "../assets/lotties/sparkles.json";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center hover:scale-110 transition-transform duration-200 w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="size-[60%]  object-contain"
        />
      </div>
    }
  >
    <div>
      <h4 className="text-white text-[20px] font-bold ">{experience.title}</h4>
      <div className="flex flex-row justify-between">
        <p className="text-secondary text-[14px] " style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <div className="flex flex-row justify-between">
          <p className="text-secondary text-[14px] " style={{ margin: 0 }}>
            {experience.company_place}
          </p>
        </div>
      </div>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2 ">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wide"
        >
          {point}
        </li>
      ))}
    </ul>
    {experience.technologies && (
      <div className="flex flex-wrap  items-center text-white-100 text-[12px] italic font-semibold pt-[15px]">
        <div className="flex items-center">TECHNOLOGIES USED:</div>

        {experience.technologies.map((technology, index) => (
          <div key={`technology-point-${index}`} className=" px-[10px]  ">
            {technology}
          </div>
        ))}
      </div>
    )}
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <div className="flex flex-row flex-wrap">
          <h2 className={styles.heroHeadText}>My Engineer Era </h2>
        </div>

        <p className="mt-4  text-[18px] max-w-[80%] leading-[30px]">
          A curious and analytical mind drawn to the challenge of building,
          breaking, and understanding systems.
          <br />
          This is the path my journey in tech has followed so far :)
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default sectionWrapper(Experience, "work");
