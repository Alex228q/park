const ArcHorizontal = ({ top = 0, left = 0, color = "gray" }) => {
  return (
    <div style={{ position: "absolute", top: `${top}px`, left: `${left}px` }}>
      <div
        style={{
          width: "30px",
          height: "7px",
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          width: "7px",
          height: "20px",
          backgroundColor: color,
          rotate: "180deg",
          transform: "translate(-24px, 7px)",
        }}
      ></div>

      <div
        style={{
          width: "7px",
          height: "20px",
          backgroundColor: color,
          rotate: "180deg",
          transform: "translate(0px, 27px)",
        }}
      ></div>
    </div>
  );
};

export default ArcHorizontal;
