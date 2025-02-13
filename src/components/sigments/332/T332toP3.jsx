import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T332toP3 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-332" && selectedPumps.includes("H-3")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={30} top={591} left={2574} color={color} />
      <Valve top={620} left={2569} title={"Б"} valveColor={valveColor} />
      <Line length={20} top={650} left={2574} color={color} />
      <Line isHorizontal length={180} top={664} left={2574} color={color} />
      <Line length={220} top={664} left={2751} color={color} />
      <Line isHorizontal length={40} top={877} left={2718} color={color} />
      <Valve toUp top={859} left={2688} title={"108"} valveColor={valveColor} />
      <Line isHorizontal length={40} top={877} left={2649} color={color} />
      <Line length={400} top={877} left={2649} color={color} />
      <Valve
        gapValve="2px"
        top={1277}
        left={2644}
        title={"103"}
        valveColor={valveColor}
      />
      <Line length={84} top={1307} left={2649} color={color} />
      <Line isHorizontal length={355} top={1384} left={2300} color={color} />
      <Line length={88} top={1384} left={2300} color={color} />

      <Valve top={1472} left={2294} title={"36"} valveColor={valveColor} />

      <Line length={82} top={1502} left={2300} color={color} />

      <Line isHorizontal length={20} top={1584} left={2300} color={color} />
    </div>
  );
};

export default T332toP3;
