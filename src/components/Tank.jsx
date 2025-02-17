import useStore from "../store/store.js";

const Tank = ({ title, productType = "ПСТ", top = 0, left = 0 }) => {
  const { selectedTank, setSelectedTank } = useStore();

  const handleClick = () => {
    setSelectedTank(title);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[150px] h-[150px] rounded-full border-4 flex items-center justify-center text-4xl absolute ${
        selectedTank === title ? "bg-green-500" : "bg-white"
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className="flex flex-col justify-center items-center gap-y-1.5">
        <p>{title}</p>
        <p className="text-3xl">{productType}</p>
      </div>
    </div>
  );
};

export default Tank;
