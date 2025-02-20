import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const T331ptoP4 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-331" && selectedPumps.includes("H-4")) {
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
      <Line isHorizontal length={15} top={876} left={2559} color={color} />
      <Valve toUp top={859} left={2574} title={"49"} valveColor={valveColor} />
      <Line isHorizontal length={52} top={877} left={2604} color={color} />

      <Line length={400} top={877} left={2649} color={color} />
      <Valve
        gapValve="2px"
        top={1277}
        left={2644}
        title={"103"}
        valveColor={valveColor}
      />
      <Line length={84} top={1307} left={2649} color={color} />
      <Line isHorizontal length={106} top={1384} left={2550} color={color} />

      <Line length={88} top={1384} left={2550} color={color} />

      <Valve top={1472} left={2545} title={"29"} valveColor={valveColor} />

      <Line length={25} top={1501} left={2550} color={color} />

      <Line isHorizontal length={25} top={1519} left={2532} color={color} />

      <Line length={67} top={1519} left={2532} color={color} />

      <Line isHorizontal length={38} top={1585} left={2532} color={color} />
    </div>
  );
};

export default T331ptoP4;
