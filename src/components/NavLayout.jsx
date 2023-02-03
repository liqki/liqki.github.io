import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function NavLayout({ isOpened, setIsOpened }) {
  return (
    <>
      <NavBar isOpened={isOpened} setIsOpened={setIsOpened} />
      <Outlet />
    </>
  );
}

export default NavLayout;
