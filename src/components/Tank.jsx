import useStore from "../store/store.js";

const Tank = ({ title, top = 0, left = 0 }) => {
  const { selectedTank, setSelectedTank } = useStore();

  const handleClick = () => {
    setSelectedTank(title);
  };

  return (
    <div
      onClick={handleClick}
      className={`w-[150px] h-[150px] rounded-full border-4 flex items-center justify-center text-4xl absolute ${
        selectedTank === title ? "bg-blue-400" : "bg-white"
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {title}
    </div>
  );
};

export default Tank;
