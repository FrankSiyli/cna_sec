const ArrowLeftSvg = () => {
  return (
    <div className="fixed left-2 top-28 rounded shadow-xl bg-appBlue/70 hover:bg-appBlue border border-appGrey/50 cursor-pointer z-10 text-appGrey">
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
