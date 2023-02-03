import React from "react";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../content/projectList";
import { motion } from "framer-motion";
import OpenNavMenu from "../components/OpenNavMenu";

function Projects({ setIsOpened }) {
  return (
    <>
      <OpenNavMenu setIsOpened={setIsOpened} />
      <div className="h-auto min-h-footer w-screen bg-dark flex justify-center items-center flex-col text-light">
        <h2 className="text-4xl mt-20">Projects</h2>
        <div className="lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 w-[70vw] h-auto grid place-items-center">
          {projects.map((project, i) => (
            <motion.div
              className="bg-dark text-light w-screen flex justify-center items-center flex-col"
              key={i}
              initial={{ translateX: -300, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.2 }}
            >
              <ProjectCard name={project.name} id={project.id} img={project.images[0]} />
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
