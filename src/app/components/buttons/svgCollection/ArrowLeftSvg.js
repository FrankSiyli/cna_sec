
const ArrowLeftSvg = () => {

  return (
    <div
      className="fixed left-2 top-28 rounded shadow text-appBlue z-30 hover:scale-105 cursor-pointer transform transition-all duration-300"    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default ArrowLeftSvg;
