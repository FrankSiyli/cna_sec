import React from "react";

const ClosingAtom = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center items-center w-10 h-10 hover:-rotate-12 rounded-full transform transition-transform duration-300">
        <div className="w-7  rotate-45 border rounded-full border-appBlue"></div>
        <div className="w-7  -rotate-45 border rounded-full border-appBlue"></div>
      </div>
    </>
  );
};

export default ClosingAtom;
