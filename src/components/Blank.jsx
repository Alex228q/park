const Blank = ({ top = 0, left = 0 }) => {
  return (
    <div
      className={`w-[150px] h-[150px] absolute`}
      style={{ top: `${top}px`, left: `${left}px` }}
    ></div>
  );
};

export default Blank;
