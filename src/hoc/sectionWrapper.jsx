import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";
const sectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className={` ${styles.paddingX} relative z-0 mx-auto w-full max-w-7xl`}
      >
        <span className="hash-span " id ={idName}>
            &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default sectionWrapper;
