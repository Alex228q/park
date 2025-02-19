import useStore from "../store/store.js";

const Pump115 = ({ title, top = 0, left = 0 }) => {
  const { selectedPumps115, setSelectedPump115 } = useStore();

  const handleClick = () => {
    setSelectedPump115(title);
  };

  const isSelected = selectedPumps115.includes(title);

  return (
    <div
      onClick={handleClick}
      className={`w-[100px] h-[100px] rounded-full border-4 flex items-center justify-center text-4xl absolute ${
        isSelected ? "bg-green-500" : "bg-white"
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {title}
    </div>
  );
};

export default Pump115;
