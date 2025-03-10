import useStore from "../store/store.js";

const LoadingReck = ({ title, top = 0, left = 0 }) => {
  const { selectedReck } = useStore();

  return (
    <div
      className={`font-bold border-4 w-[550px] h-[150px] absolute flex justify-center items-center text-4xl ${
        selectedReck === title ? "bg-green-500" : "bg-white"
      }`}
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
    >
      {title}
    </div>
  );
};

export default LoadingReck;
