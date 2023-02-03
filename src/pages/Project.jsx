import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { projects } from "../content/projectList";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider";
import OpenNavMenu from "../components/OpenNavMenu";

function Project({ setIsOpened }) {
  // get project id from url
  const { id } = useParams();
  // get project with id
  const project = projects[id];

  // redirect user if project with id doesn't exist
  if (!project) return <Navigate to="/404" />;

  return (
    <>
      <OpenNavMenu setIsOpened={setIsOpened} />
      <div className="h-footer bg-dark text-light w-screen flex justify-center items-center flex-col noselect">
        <motion.div initial={{ translateY: -300 }} animate={{ translateY: 0 }} transition={{ duration: 0.3 }}>
          <h2 className="text-4xl mt-12">{project.name}</h2>
        </motion.div>
        <motion.div initial={{ translateX: 300, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.3 }}>
          <ImageSlider slides={project.images} />
        </motion.div>
        <motion.div initial={{ translateX: -300, opacity: 0 }} animate={{ translateX: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.6 }}>
          <p className="lg:max-w-[500px] lg:text-xl xl:max-w-[700px] xl:text-2xl text-center text-lg max-w-[300px]">{project.description}</p>
        </motion.div>
        <motion.div
          className={`mt-4 ${project.github === null || (project.github === "" && "hidden")}`}
          initial={{ translateY: 300 }}
          animate={{ translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <a href={project.github} className="text-5xl hover:cursor-pointer hover:text-gray-400">
            <FaGithub />
          </a>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Project;
