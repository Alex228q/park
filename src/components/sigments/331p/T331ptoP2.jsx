import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T331ptoP2 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-331" && selectedPumps.includes("H-2")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={27} top={294} left={2569} color={color} />

      <Valve top={321} left={2563} title={"Б"} valveColor={valveColor} />

      <Line length={29} top={351} left={2569} color={color} />

      <Line isHorizontal length={150} top={373} left={2426} color={color} />

      <Line length={277} top={373} left={2426} color={color} />

      <Line isHorizontal length={87} top={643} left={2426} color={color} />

      <Line length={155} top={643} left={2506} color={color} />

      <Line isHorizontal length={60} top={791} left={2506} color={color} />
      <Line length={85} top={791} left={2559} color={color} />
      <Line isHorizontal length={20} top={876} left={2559} color={color} />
      <Valve
        toUp
        top={859}
        left={2579}
        title={"ЗМ-49"}
        valveColor={valveColor}
      />
      <Line isHorizontal length={47} top={877} left={2609} color={color} />
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

export default T331ptoP2;
