import Line from "./Line.jsx";
import Valve from "./Valve.jsx";

import useStore from "../../store/store.js";

const T326toP2 = () => {
  const { selectedTank, selectedPump } = useStore();
  let color = "transparent";
  let displayState = "none";

  if (selectedTank === "E-326" && selectedPump === "H-2") {
    color = "green";
    displayState = "flex";
  }
  return (
    <>
      <Line length={22} top={597} left={1043} color={color} />

      <Valve top={619} left={1036} title={"Б"} displayState={displayState} />

      <Line length={50} top={648} left={1043} color={color} />

      <Line isHorizontal length={140} top={691} left={910} color={color} />

      <Line length={300} top={691} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={1910} color={color} />
    </>
  );
};

export default T326toP2;
