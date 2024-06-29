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
      <div className="fixed z-10 top-0 left-0 w-full h-24 flex justify-center items-center text-center  bg-appGrey border-b border-black/20 shadow opacity-95">
        <Logo />
        <div className="text-sm md:text-base">
        <h1 className="">
          <span className="text-appBlue">LIFE</span> is good
        </h1>
        <h1 className="">
          <span className="text-appBlue">TRIATHLON</span> makes it better
        </h1>
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
