const SmallValve = ({
  top = 0,
  left = 0,
  toUp = false,
  title,
  valveColor = "gray",
  gapValve = "0px",
}) => {
  const rotate = !toUp ? "rotate(90deg)" : "rotate(0deg)";
  const titleRotate = !toUp ? "rotate(270deg)" : "rotate(0deg)";
  return (
    <div
      className={`w-[15px] h-[15px] absolute flex flex-col-reverse items-center `}
      style={{
        top: `${top}px`,
        left: `${left}px`,
        transform: rotate,
        gap: gapValve,
      }}
    >
      <img src="./valve.png" alt="valve" />

      <div className="text-xs font-semibold" style={{ transform: titleRotate }}>
        {title}
      </div>

      <div
        style={{
          position: "absolute",
          borderRadius: "100%",
          top: "50%",
          left: "50%",
          width: "6px",
          height: "6px",
          backgroundColor: valveColor,
          transform: "translate(-50%, -4%)",
        }}
      />
    </div>
  );
};

export default SmallValve;
