import ArrowRightSvg from "@/app/components/buttons/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";
import ButtonHamburgerMenu from "../buttons/ButtonHamburgerMenu";
import Image from "next/image";

const Menu = forwardRef(({ handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);

  const menuItemsArray = [
    {
      title: "M-52 Challenge",
      link: "/m52",
    },
    {
      title: "siyli-app.de",
      link: "https://www.siyli-app.de",
      newTab: true,
    },
  ];
  

  return (
    <div
      className={`${
        showMenu
          ? "fixed top-0 right-0 w-full h-full shadow-2xl z-20 bg-neutral-800/70"
          : ""
      }`}
    >
      {loaded ? (
        <div
          ref={ref}
          className={`fixed top-0 right-1 bottom-0 w-40 p-5 bg-appGrey border-l-1 border-b-1 border-t-1 border-appBlue rounded shadow-2xl flex flex-col justify-center items-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-100`}
        >
          {" "}
          <ButtonHamburgerMenu
            handleClick={handleMenuClick}
            secondProp={showMenu}
          />
          <Image
            className="absolute top-0 left-0 opacity-70 w-full h-auto"
            width={400}
            height={400}
            src="/triathlon_2.png"
            alt="triathlon"
          />
          <div className="relative w-40 z-10">
            <span className="flex flex-col w-full">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
              <Link
              onClick={() => setShowMenu(false)}
              href={menuItem.link}
              key={menuItemIndex}
              target={menuItem.newTab ? "_blank" : "_self"}
              rel={menuItem.newTab ? "noopener noreferrer" : undefined}
              className="flex flex-row justify-between items-center mt-1 rounded bg-appBlue/80 text-appGrey border border-appGrey/50 cursor-pointer shadow-xl hover:text-black/50 transform transition-transform duration-300"
            >
              <p className="m-1">{menuItem.title}</p>
              <ArrowRightSvg />
            </Link>
            
              ))}
            </span>
          </div>
          <Image
            className="absolute bottom-0 left-0 opacity-70 w-full h-auto"
            width={400}
            height={400}
            src="/triathlon_3.png"
            alt="triathlon"
          />
        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
