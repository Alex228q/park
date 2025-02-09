import useStore from "../store/store.js";

const Pump = ({ title, top = 0, left = 0 }) => {
  const { selectedPump, setSelectedPump } = useStore();

  const handleClick = () => {
    setSelectedPump(title);
  };
  return (
    <div
      onClick={handleClick}
      className={`w-[100px] h-[100px] rounded-full border-4 flex items-center justify-center text-4xl absolute ${
        selectedPump === title ? "bg-green-500" : "bg-white"
      }`}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      {title}
    </div>
  );
};

export default Pump;
