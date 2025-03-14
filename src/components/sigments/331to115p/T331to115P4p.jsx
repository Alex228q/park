import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";

const T331to115P4p = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-331" && selectedPumps115.includes("H-4")) {
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

      <Line isHorizontal length={1050} top={984} left={1066} color={color} />

      <Valve toUp top={966} left={2116} title={"27"} valveColor={valveColor} />

      <Line isHorizontal length={90} top={984} left={2146} color={color} />

      <Line length={400} top={984} left={2229} color={color} />

      <Line isHorizontal length={25} top={1384} left={2229} color={color} />

      <Valve toUp top={1366} left={2254} title={"20"} valveColor={valveColor} />
      <Valve toUp top={967} left={1037} title={"73"} valveColor={valveColor} />
      <Line isHorizontal length={127} top={984} left={910} color={color} />
      <Line length={233} top={757} left={910} color={color} />
      <Line isHorizontal length={57} top={751} left={860} color={color} />
      <Valve
        toUp
        top={734}
        left={830}
        title={"ЗМ-45"}
        valveColor={valveColor}
      />
      <Line isHorizontal length={61} top={751} left={769} color={color} />
      <ArcHorizontal color={color} top={737} left={745} />
      <Line isHorizontal length={184} top={751} left={568} color={color} />
      <ArcHorizontal color={color} top={737} left={544} />
      <Line isHorizontal length={201} top={751} left={350} color={color} />
      <Line length={500} top={751} left={350} color={color} />
      <Line isHorizontal length={706} top={1251} left={350} color={color} />
      <Line length={24} top={1251} left={1049} color={color} />
      <Arc color={color} top={1269} left={1063} />
      <Line length={65} top={1293} left={1049} color={color} />
      <Valve
        top={1358}
        left={1044}
        title={"ЗМ-29"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={30} top={1388} left={1049} color={color} />
      <Line isHorizontal length={90} top={1411} left={965} color={color} />
      <Line length={185} top={1411} left={965} color={color} />
      <Line isHorizontal length={37} top={1589} left={965} color={color} />
    </div>
  );
};

export default T331to115P4p;
