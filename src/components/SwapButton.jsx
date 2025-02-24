import useStore from "../store/store";
const SwapButton = ({ top = 0, left = 0, isSwap }) => {
  const { toggleSwap } = useStore();
  return (
    <button
      onClick={toggleSwap}
      style={{ top: `${top}px`, left: `${left}px` }}
      className="text-2xl absolute cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isSwap ? "НАЛИВ" : "ПЕРЕКАЧКИ"}
    </button>
  );
};

export default SwapButton;
