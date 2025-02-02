
const ArrowLeftSvg = () => {

  return (
    <div
      className="fixed left-2 top-28 rounded shadow text-appBlue z-10 bg-appGrey/20 hover:bg-appGrey cursor-pointer"    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
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
