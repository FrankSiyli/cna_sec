"use client";
import React, { useEffect, useRef, useState } from "react";
import Menu from "../Menu/Menu";
import ButtonHamburgerMenu from "../buttons/ButtonHamburgerMenu";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Header = () => {
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [lastHideScrollY, setLastHideScrollY] = useState(0);
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
  }, [setShowMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
          setLastHideScrollY(currentScrollY); 
        } else if (currentScrollY < lastScrollY && lastHideScrollY - currentScrollY > 100) {
          setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, lastHideScrollY]);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`headerBackground fixed z-10 top-0 left-0 w-screen h-24 flex justify-center items-center text-center shadow-xl transition-transform duration-300 ${
          showHeader ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="text-sm md:text-xl absolute flex flex-col justify-center items-center">
          <span className="border border-appGrey/50 text-appGrey mb-1 font-semibold flex bg-appBlue/90 rounded py-1 px-2">
            LIFE <p className=" text-appGrey font-light ml-1"> is good</p>
          </span>

          <span className="border border-appGrey/50 text-appGrey font-semibold flex bg-appBlue/90 rounded py-1 px-2">
            TRIATHLON{" "}
            <p className=" text-appGrey font-light ml-1"> makes it better</p>
          </span>
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
