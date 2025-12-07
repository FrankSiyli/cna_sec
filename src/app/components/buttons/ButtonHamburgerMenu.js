import React from "react";

const ButtonHamburgerMenu = ({ handleClick, secondProp }) => {
  return (
    <span
      onClick={handleClick}
      className="fixed z-30 right-5 top-5 rounded shadow-xl p-1.5 md:p-2 bg-appBlue/80 hover:bg-appBlue border border-appGrey/50 cursor-pointer"
    >
      <div
        className={`w-5 border border-appGrey transform transition-all duration-1000 ${
          secondProp ? "rotate-45 translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

      <div
        className={`w-3 my-1.5 mx-auto border border-appGrey transform transition-all duration-700 ${
          secondProp ? "rotate-45 w-6" : ""
        }`}
      ></div>

      <div
        className={`w-5 border border-appGrey transform transition-all duration-1000 ${
          secondProp ? "-rotate-45 -translate-y-2.5" : ""
        }`}
      ></div>

    
    </span>
  );
};

export default ButtonHamburgerMenu;
