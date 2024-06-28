import ArrowRightSvg from "@/app/components/buttons/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import ClosingAtom from "../buttons/ButtonClosing";
import Link from "next/link";

const Menu = forwardRef(({ showMenu, handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <div
      className={`${
        showMenu
          ? "fixed top-0 right-0 w-full h-full shadow-2xl z-20 bg-neutral-800/30"
          : ""
      }`}
    >
      {loaded ? (
        <div
          ref={ref}
          className={`fixed top-1 right-1 bottom-1 w-64 p-5 bg-appGrey border-2 border-appBlue/50 rounded flex flex-col justify-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  bg-appGrey duration-100`}
        >
          <span
            onClick={handleMenuClick}
            className="absolute top-5 right-8 cursor-pointer"
          >
            <ClosingAtom />
          </span>

          <div className="fixed left-0 w-full">
            
            <span className="flex flex-col w-full">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="flex justify-between items-center my-1 border-b border-t text-appBlue cursor-pointer hover:scale-y-105 shadow transform transition-transform duration-100"
                >
                  <p className="m-2 text-xl">{menuItem.title}</p>
                  <span className="scale-75">
                    <ArrowRightSvg />
                  </span>
                </Link>
              ))}
            </span>
          </div>
          <div className="fixed left-0 bottom-0 w-full p-2 text-appBlue">
          <h2 className="text-xl">Kontakt:</h2>
            <a className="text-center underline" href="mailto:info@siyli-endurance-coaching.com">
            info@siyli-endurance-coaching.com
            </a>
            </div>
        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
