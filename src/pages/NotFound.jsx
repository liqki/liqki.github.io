import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="lg:text-7xl text-4xl h-screen flex items-center justify-center flex-col gap-10 bg-dark text-light text-center noselect">
      <h1 className="text-9xl">404</h1>
      <p>Oh no, you got lost!</p>
      <Link className="text-xl rounded-full border-2 border-light px-6 py-3 hover:bg-light hover:text-dark hover:scale-[1.05] transition-transform duration-300" to="/">
        Return home
      </Link>
    </div>
  );
}

export default NotFound;
