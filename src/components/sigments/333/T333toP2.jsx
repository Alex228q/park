import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T333toP2 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-333" && selectedPumps.includes("H-2")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={29} top={292} left={2951} color={color} />

<Valve top={321} left={2946} title={"Б"} valveColor={valveColor} />
<Line length={29} top={351} left={2951} color={color} />
<Line isHorizontal length={206} top={373} left={2751} color={color} />
<Line length={302} top={373} left={2751} color={color} />
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
      <Line isHorizontal length={373} top={1384} left={2283} color={color} />

      <Line isHorizontal length={25} top={1384} left={2229} color={color} />

      <Valve toUp top={1366} left={2254} title={"20"} valveColor={valveColor} />

      <Line isHorizontal length={70} top={1384} left={2166} color={color} />

      <Valve toUp top={1366} left={2137} title={"19"} valveColor={valveColor} />

      <Line isHorizontal length={80} top={1383} left={2057} color={color} />

      <Line length={88} top={1383} left={2057} color={color} />

      <Valve top={1470} left={2051} title={"38"} valveColor={valveColor} />

      <Line length={82} top={1500} left={2057} color={color} />

      <Line isHorizontal length={23} top={1582} left={2057} color={color} />
    </div>
  );
};

export default T333toP2;
