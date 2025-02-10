import Line from "./Line.jsx";
import Valve from "./Valve.jsx";

import useStore from "../../store/store.js";

const T326toP2 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;

  if (selectedTank === "E-326" && selectedPumps.includes("H-2")) {
    color = "green";
    index = 20;
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={22} top={597} left={1043} color={color} />

      <Valve top={619} left={1036} title={"Б"} />

      <Line length={50} top={648} left={1043} color={color} />

      <Line isHorizontal length={140} top={691} left={910} color={color} />

      <Line length={300} top={691} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={962} color={color} />

      <Valve toUp top={967} left={1037} title={"73"} />

      <Line isHorizontal length={1050} top={984} left={1066} color={color} />

      <Valve toUp top={966} left={2116} title={"27"} />

      <Line isHorizontal length={90} top={984} left={2146} color={color} />

      <Line length={400} top={984} left={2229} color={color} />

      <Line isHorizontal length={70} top={1384} left={2166} color={color} />

      <Valve toUp top={1366} left={2137} title={"19"} />

      <Line isHorizontal length={80} top={1383} left={2057} color={color} />

      <Line length={88} top={1383} left={2057} color={color} />

      <Valve top={1470} left={2051} title={"38"} />

      <Line length={82} top={1500} left={2057} color={color} />

      <Line isHorizontal length={23} top={1582} left={2057} color={color} />
    </div>
  );
};

export default T326toP2;
