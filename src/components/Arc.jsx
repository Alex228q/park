const Arc = ({ top = 0, left = 0, color = "gray" }) => {
  return (
    // <div
    //   style={{
    //     position: "absolute",
    //     top: `${top}px`,
    //     left: `${left}px`,
    //     width: "7px",
    //     height: "35px",
    //     backgroundColor: color,
    //     rotate: "140deg",
    //     borderRadius: "3px",
    //   }}
    // ></div>
    <div style={{ position: "absolute", top: `${top}px`, left: `${left}px` }}>
      <div
        style={{
          width: "7px",
          height: "30px",
          backgroundColor: color,
        }}
      ></div>
      <div
        style={{
          width: "7px",
          height: "20px",
          backgroundColor: color,
          rotate: "90deg",
          transform: "translate(-37px, 7px)",
        }}
      ></div>

      <div
        style={{
          width: "7px",
          height: "20px",
          backgroundColor: color,
          rotate: "90deg",
          transform: "translate(-33px, 7px)",
        }}
      ></div>
    </div>
  );
};

export default Arc;
