import React, { useState } from "react";
import astronaut from "../assets/astronaut.png";
import TypewriterComponent from "typewriter-effect";
import { BsArrowDownCircleFill, BsFillChatTextFill } from "react-icons/bs";
import { FaGithub, FaDiscord } from "react-icons/fa";
import Skills from "../components/Skills";
import OpenNavMenu from "../components/OpenNavMenu";

function Home({ setIsOpened }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 256 });

  // check if device is touch device to disable mousemove
  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;

  // handle mousemove to move astronaut
  const onMouseMove = (e) => {
    if (isTouchDevice) return;
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <OpenNavMenu setIsOpened={setIsOpened} />
      <div className="h-screen snap-y snap-mandatory w-screen overflow-y-scroll hidescrollbar">
        <div className="min-h-screen bg-dark relative text-white flex flex-col items-center justify-center snap-start noselect" onMouseMove={onMouseMove}>
          <img
            src={astronaut}
            onDragStart={(e) => {
              e.preventDefault();
            }}
            className="hidden lg:block xl:w-96 w-60 z-10 absolute top-10 right-2"
            style={{ translate: `${mousePosition.x / 50}px ${mousePosition.y / 10}px` }}
          />
          <div className="lg:top-[30%] lg:left-[45%] lg:w-72 lg:h-72 absolute top-[40vh] left-[50%] w-32 h-32 bg-purple-500 filter blur-xl rounded-full opacity-20 animate-move" />
          <div className="lg:top-[45%] lg:left-[30%] lg:w-72 lg:h-72 absolute top-[50vh] left-[30%] w-32 h-32 bg-yellow-300 filter blur-xl rounded-full opacity-20 animate-move animation-delay-2000" />
          <div className="lg:top-[50%] lg:left-[50%] lg:w-72 lg:h-72 absolute top-[45vh] left-[20%] w-32 h-32 bg-red-500 filter blur-xl rounded-full opacity-20 animate-move animation-delay-4000" />
          <div className="text-center p-10">
            <h2 className="lg:text-7xl text-5xl text-teal-500 font-medium font-sans z-10">
              <TypewriterComponent
                options={{
                  strings: ["Hi! I'm Leon"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 60000,
                  cursor: "_",
                }}
              />
            </h2>
            <h3 className="lg:text-4xl text-2xl py-2 z-10">A student from Germany</h3>
            <p className="lg:text-xl lg:max-w-[420px] text-md py-5 text-light leading-6 max-w-[330px] z-10">I'm a 16 year old student who is interested in programming and web development.</p>
          </div>
          <div className="lg:text-4xl text-3xl flex justify-center gap-10 py-1 text-light z-10">
            <a
              onDragStart={(e) => {
                e.preventDefault();
              }}
              href="https://github.com/liqki"
              className="hover:text-gray-400 hover:scale-[1.1] transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              onDragStart={(e) => {
                e.preventDefault();
              }}
              href="https://www.discordapp.com/users/557569088466190356"
              className="hover:text-[#7289da] hover:scale-[1.1] transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              onDragStart={(e) => {
                e.preventDefault();
              }}
              href="https:chat.liqki.me"
              className="hover:text-pink-400 hover:scale-[1.1] transition-transform duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillChatTextFill />
            </a>
          </div>
          <div className="absolute bottom-0 text-sm flex w-screen items-center justify-center mb-4 gap-2 text-light">
            <BsArrowDownCircleFill className="animate-bounce" />
            Scroll to see my skills
          </div>
        </div>
        <Skills setIsOpened={setIsOpened} />
      </div>
    </>
  );
}

export default Home;
