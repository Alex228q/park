import useStore from "../store/store.js";

const Tank = ({ title, top = 0, left = 0 }) => {
  const { selectedTank, selectedTankForSwap, deepMazut, moveTankBetweenLists } =
    useStore();

  // const handleClick = () => {
  //   setSelectedTank(title);
  // };

  const handleDoubleClick = () => {
    if (title === "E-331") {
      moveTankBetweenLists("E-331");
    }
  };

  const productType = deepMazut.includes(title) ? "ЗГПН" : "ПСТ";

  let colorTank = selectedTank === title ? "bg-green-500" : "bg-white";
  if (selectedTankForSwap === title) {
    colorTank = "bg-amber-500";
  }

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`w-[150px] h-[150px] rounded-full border-4 flex items-center justify-center text-4xl absolute ${colorTank}`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="flex flex-col justify-center items-center gap-y-1.5">
        <p>{title}</p>
        <p className="text-2xl">{productType}</p>
      </div>
    </div>
  );
};

export default Tank;
