const Tank = ({ title, top = 0, left = 0 }) => {
  return (
    <div
      className={`cursor-pointer w-[150px] h-[150px] rounded-full border flex items-center justify-center text-3xl absolute  ${
        isActive ? "bg-green-400" : "bg-white"
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {title}
    </div>
  );
};

export default Tank;
