"use client";
import React, { useEffect, useRef, useState, forwardRef } from "react";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import ButtonHamburgerMenu from "../buttons/ButtonHamburgerMenu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="headerBackground fixed z-10 top-0 left-0 w-screen h-24 flex justify-center items-center text-center shadow-xl ">
        <div className="text-sm md:text-xl absolute flex flex-col justify-center items-center">
          <span className="border border-appBlue/50 text-appBlue mb-1 font-semibold flex bg-appGrey/90 rounded py-1 px-2">LIFE <p className=" text-appDark font-light ml-1"> is good</p></span> 
       
          <span className="border border-appBlue/50 text-appBlue font-semibold flex bg-appGrey/90 rounded py-1 px-2">TRIATHLON <p className=" text-appDark font-light ml-1"> makes it better</p></span>
        </div>

        <ButtonHamburgerMenu
          handleClick={handleMenuClick}
          secondProp={showMenu}
        />
      </div>
      <Menu
        ref={menuRef}
        showMenu={showMenu}
        handleMenuClick={handleMenuClick}
      />
    </>
  );
};

export default Header;
