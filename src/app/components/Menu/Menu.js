import ArrowRightSvg from "@/app/components/buttons/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import Link from "next/link";

const Menu = forwardRef(({ showMenu, handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

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
          className={`fixed top-10 right-1 bottom-10 w-48 p-5 bg-appGrey border-l-1 border-b-1 border-t-1 border-appBlue/50 rounded shadow-2xl flex flex-col justify-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-100`}
        >
          <span
            onClick={handleMenuClick}
            className="absolute top-5 right-8 cursor-pointer"
          >
          </span>

          <div className="fixed left-0 w-full">
            
            <span className="flex flex-col w-full">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="flex justify-between items-center my-1  text-appBlue cursor-pointer hover:shadow transform transition-transform duration-1000"
                >
                  <p className="m-2 text-xl">{menuItem.title}</p>
                  <span className="scale-75">
                    <ArrowRightSvg />
                  </span>
                </Link>
              ))}
                  
            </span>
          </div>
          
          <div className="absolute -top-3 left-2 w-10 h-10 z-50">
          {/** rear wheel */}
          <div className="absolute bottom-0 left-0 w-3 h-3 rounded-full border-2 border-appBlue/50">
            <span className="absolute left-1 top-0 h-2 w-0 border border-appBlue/50 animate-spin"></span>
            <span className="absolute left-0 top-1 h-0 w-2 border border-appBlue/50 animate-spin"></span>
            {/** frame */}
            <span className="absolute left-1 top-0 h-0 w-3 border border-appBlue/50 -rotate-45 "></span>
            <span className="absolute left-1 top-1 h-0 w-3.5 border border-appBlue/50 "></span>
            <span className="absolute left-2 bottom-2 h-0 w-3.5 border border-appBlue/50 rotate-90"></span>
            <span className="absolute left-4 -top-1 h-0 w-3 border border-appBlue/50"></span>
            <span className="absolute left-4 top-0 h-0 w-3 border border-appBlue/50 -rotate-45"></span>
            <span className="absolute left-3 -top-2 h-0 w-2 border border-appBlue/50"></span>
            <span className="absolute left-6 -top-1.5 h-0 w-1 border border-appBlue/50 rotate-90"></span>
            <span className="absolute left-6 -top-2 h-0 w-2 border border-appBlue/50"></span>
          </div>
          {/** front wheel */}
          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-appBlue/50">
            <span className="absolute left-1 top-0 h-2 w-0 border border-appBlue/50 animate-spin"></span>
            <span className="absolute left-0 top-1 h-0 w-2 border border-appBlue/50 animate-spin"></span>
            <span className="absolute right-0 top-0 h-0 w-3 border border-appBlue/50 rotate-45 "></span>
          </div>
        </div>


        </div>
      ) : null}
    </div>
  );
});

Menu.displayName = "Menu";

export default Menu;
