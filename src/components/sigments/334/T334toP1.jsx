import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T334toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-334" && selectedPumps.includes("H-1")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={15} top={592} left={2951} color={color} />
      <Valve top={607} left={2946} title={"Б"} valveColor={valveColor} />
      <Line length={34} top={637} left={2951} color={color} />
      <Line isHorizontal length={207} top={664} left={2751} color={color} />

     
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

      <Line isHorizontal length={1050} top={984} left={1066} color={color} />

      <Valve toUp top={966} left={2116} title={"27"} valveColor={valveColor} />

      <Line isHorizontal length={90} top={984} left={2146} color={color} />

      <Line length={400} top={984} left={2229} color={color} />

      <Line isHorizontal length={25} top={1384} left={2229} color={color} />

      <Valve toUp top={1366} left={2254} title={"20"} valveColor={valveColor} />
      <Valve toUp top={967} left={1037} title={"73"} valveColor={valveColor} />
      <Line isHorizontal length={59} top={984} left={978} color={color} />
      <Line length={90} top={984} left={978} color={color} />
      <Line isHorizontal length={59} top={1067} left={978} color={color} />

      <Valve toUp top={1048} left={1036} title={"74"} valveColor={valveColor} />

      <Line isHorizontal length={660} top={1067} left={1064} color={color} />

      <Line length={400} top={1068} left={1718} color={color} />
      <Valve top={1467} left={1713} title={"3"} valveColor={valveColor} />

      <Line length={90} top={1496} left={1719} color={color} />

      <Line isHorizontal length={112} top={1579} left={1719} color={color} />
    </div>
  );
};

export default T334toP1;
