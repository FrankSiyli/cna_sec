import React from "react";

const ButtonHamburgerMenu = ({ handleClick, secondProp }) => {
  return (
    <span
      onClick={handleClick}
      className="fixed right-5 rounded shadow-xl p-2 bg-appBlue/80 hover:bg-appBlue border border-appGrey/50 cursor-pointer"
    >
      <div
        className={`w-6 border border-appGrey transform transition-all duration-1000 ${
          secondProp ? "rotate-45 translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

      <div
        className={`w-4 my-2 ml-2 border border-appGrey transform transition-all duration-700 ${
          secondProp ? "rotate-45 w-40" : ""
        }`}
      ></div>

      <div
        className={`w-6 border border-appGrey transform transition-all duration-1000 ${
          secondProp ? "-rotate-45 -translate-y-2.5 opacity-0" : ""
        }`}
      ></div>

    
    </span>
  );
};

export default ButtonHamburgerMenu;
