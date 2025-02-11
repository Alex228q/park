const Valve = ({ top = 0, left = 0, toUp = false, title, valveColor }) => {
  const rotate = !toUp ? "rotate(90deg)" : "rotate(0deg)";
  const titleRotate = !toUp ? "rotate(270deg)" : "rotate(0deg)";
  return (
    <div
      className={`w-[30px] h-[30px] absolute flex flex-col-reverse items-center `}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        transform: rotate,
      }}
    >
      <img src="./valve.png" alt="valve" />

      <div className="text-3xl font-bold" style={{ transform: titleRotate }}>
        {title}
      </div>

      <div
        style={{
          position: "absolute",
          borderRadius: "100%",
          top: "50%",
          left: "50%",
          width: "13px",
          height: "13px",
          backgroundColor: valveColor,
          transform: "translate(-50%, -4%)",
        }}
      />
    </div>
  );
};

export default Valve;
