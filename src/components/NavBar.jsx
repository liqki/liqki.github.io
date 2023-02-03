import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { useSwipeable } from "react-swipeable";

function NavBar({ isOpened, setIsOpened }) {
  const [isClosing, setIsClosing] = useState(false);

  // handle swipe to close navbar
  const swipeHandler = useSwipeable({
    delta: 100,
    onSwipedRight: () => closeMenu(),
  });

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpened(false);
      setIsClosing(false);
    }, 500);
  };
  return (
    <>
      <nav className="text-light bg-dark h-20 fixed top-0 w-screen flex justify-between items-center z-20 noselect">
        <div className="ml-5 text-2xl xl:text-4xl font-pacifico">liqki</div>
        {/* mobile */}
        <div className="lg:hidden">
          <HiMenuAlt3
            className="text-4xl mr-5 hover:text-white hover:cursor-pointer"
            onClick={() => {
              isOpened ? closeMenu() : setIsOpened(true);
            }}
          />
        </div>
        {/* large screens */}
        <div className="hidden lg:block">
          <ul className="flex gap-16 mr-5 text-xl items-center">
            <li className="hover:scale-[1.05] transition-transform duration-300 hover:text-white">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:scale-[1.05] transition-transform duration-300 hover:text-white">
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <ul className="flex gap-5 text-2xl items-center">
                <li className="rounded-full border-white border-2 p-1 hover:text-gray-400 hover:border-gray-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://github.com/liqki"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-pink-400 hover:border-pink-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://www.instagram.com/l1qki/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-[#7289da] hover:border-[#7289da] hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://www.discordapp.com/users/557569088466190356"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-blue-400 hover:border-blue-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://twitter.com/l1qki"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="text-xl rounded-md border-white border-2 p-1 px-3 ml-3 hover:text-green-500 hover:border-green-500 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {isOpened && (
        <div className={`h-[calc(100vh-80px)] w-screen fixed bottom-0 bg-dark z-20 text-[#d4d2d2] overflow-hidden animate-slide-in ${isClosing && "animate-slide-out"}`} {...swipeHandler}>
          <ul className="text-2xl flex flex-col items-center h-[calc(100vh-80px)] justify-evenly noselect">
            <li>
              <Link to={"/"} onClick={() => setIsOpened(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/projects"} onClick={() => setIsOpened(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to={"/contact"} onClick={() => setIsOpened(false)}>
                Contact
              </Link>
            </li>
            <li>
              <ul className="flex gap-5 text-4xl items-center">
                <li className="rounded-full border-white border-2 p-1 hover:text-gray-400 hover:border-gray-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://github.com/liqki"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-pink-400 hover:border-pink-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://www.instagram.com/l1qki/"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-[#7289da] hover:border-[#7289da] hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://www.discordapp.com/users/557569088466190356"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li className="rounded-full border-white border-2 p-1 hover:text-blue-400 hover:border-blue-400 hover:cursor-pointer hover:scale-[1.1] transition-transform duration-300">
                  <a
                    onDragStart={(e) => {
                      e.preventDefault();
                    }}
                    href="https://twitter.com/l1qki"
                  >
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
