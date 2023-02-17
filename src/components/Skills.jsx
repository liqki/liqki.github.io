import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimationControls } from "framer-motion";
import Skill from "./Skill";
import Footer from "./Footer";
import skills from "../content/skills";

function Skills({ setIsOpened }) {
  // use framer motion utilities to animate the skills
  const animationControls = useAnimationControls();
  const [ref, inView] = useInView();

  // animate the skills when they are in view
  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        translateX: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <div className="lg:text-2xl h-footer w-screen bg-dark text-light snap-start flex justify-center items-center flex-col text-xl noselect overflow-hidden">
        <h2 className="medheight:text-4xl lg:text-7xl text-5xl py-20" ref={ref}>
          Skills & Tools
        </h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-[60%]">
          {skills.map((skill, i) => (
            <motion.div key={i} initial={{ translateX: -300, opacity: 0 }} animate={animationControls} transition={{ duration: 0.2, delay: i * 0.2 }}>
              <Skill name={skill.name} img={skill.img} link={skill.link} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
