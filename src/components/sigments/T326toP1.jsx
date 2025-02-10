import Line from "./Line.jsx";
import Valve from "./Valve.jsx";

import useStore from "../../store/store.js";

const T326toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;

  if (selectedTank === "E-326" && selectedPumps.includes("H-1")) {
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

      <Line length={90} top={984} left={978} color={color} />

      <Line isHorizontal length={60} top={1067} left={978} color={color} />
      <Valve toUp top={1048} left={1036} title={"74"} />

      <Line isHorizontal length={660} top={1067} left={1064} color={color} />

      <Line length={400} top={1068} left={1718} color={color} />
      <Valve top={1467} left={1713} title={"3"} />

      <Line length={90} top={1496} left={1719} color={color} />

      <Line isHorizontal length={112} top={1579} left={1719} color={color} />
    </div>
  );
};

export default T326toP1;
