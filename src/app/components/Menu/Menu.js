import ArrowRightSvg from "@/app/components/buttons/svgCollection/ArrowRightSvg";
import React, { forwardRef, useEffect, useState } from "react";
import menuItemsArray from "./menuItemsArray/menuItemsArray";
import Link from "next/link";
import Image from "next/image";
import { useRecoilState } from "recoil";
import { showMenuState } from "@/app/recoil/atoms/showMenuState";

const Menu = forwardRef(({ handleMenuClick }, ref) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  const [showMenu, setShowMenu] = useRecoilState(showMenuState);

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
          className={`fixed top-0 right-1 bottom-0 w-48 p-5 bg-appGrey border-l-1 border-b-1 border-t-1 border-appBlue rounded shadow-2xl flex flex-col justify-center z-20 transform transition-transform ${
            showMenu ? "" : "translate-x-80"
          }  duration-100`}
        >
          <Image
            className="fixed top-0 left-0 opacity-50 w-full h-auto"
            width={400}
            height={400}
            src="/triathlon_2.png"
            alt="triathlon"
          />
          <div className="fixed left-0 w-full">
            <span className="flex flex-col w-full">
              {menuItemsArray.map((menuItem, menuItemIndex) => (
                <Link
                  onClick={() => setShowMenu(false)}
                  href={menuItem.link}
                  key={menuItemIndex}
                  className="flex justify-between items-center rounded m-1 bg-appBlue  text-appGrey border border-appGrey/50 cursor-pointer shadow-xl hover:text-black transform transition-transform duration-300"
                >
                  <p className="m-2 ">{menuItem.title}</p>
                  <ArrowRightSvg />
                </Link>
              ))}
            </span>
          </div>
          <Image
            className="fixed bottom-0 left-0 opacity-50 w-full h-auto"
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
