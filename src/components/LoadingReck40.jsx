import useStore from "../store/store.js";

const LoadingReck40 = ({ title, top = 0, left = 0 }) => {
  const { selectedReck, setSelectedReck } = useStore();

  const handleClick = () => {
    setSelectedReck(title);
  };
  return (
    <div
      onClick={handleClick}
      className={`border-4 w-[550px] h-[150px] absolute flex justify-center items-center text-4xl ${
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

export default LoadingReck40;
