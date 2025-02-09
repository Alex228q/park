const Line = ({
  length,
  isHorizontal = false,
  color = "black",
  thickness = 7,
  left = 0,
  top = 0,
}) => {
  const style = {
    width: isHorizontal ? `${length}px` : `${thickness}px`,
    height: isHorizontal ? `${thickness}px` : `${length}px`,
    backgroundColor: color,
    position: "absolute",
    left: `${left}px`,
    top: `${top}px`,
  };

  return <div style={style} />;
};

export default Line;
