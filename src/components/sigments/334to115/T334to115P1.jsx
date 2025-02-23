import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T334to115P1 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-334" && selectedPumps115.includes("H-1")) {
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
      <Line isHorizontal length={127} top={984} left={910} color={color} />
      <Line length={233} top={757} left={910} color={color} />

      {/*               */}

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
      <Line isHorizontal length={90} top={1251} left={350} color={color} />
      <Line length={24} top={1251} left={434} color={color} />
      <Arc color={color} top={1269} left={448} />
      <Line length={65} top={1293} left={434} color={color} />
      <Valve
        top={1358}
        left={430}
        title={"ЗМ-11"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={30} top={1388} left={434} color={color} />
      <Line isHorizontal length={90} top={1411} left={350} color={color} />
      <Line length={185} top={1411} left={350} color={color} />
      <Line isHorizontal length={50} top={1589} left={350} color={color} />
    </div>
  );
};

export default T334to115P1;
