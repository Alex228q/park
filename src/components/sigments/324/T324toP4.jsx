import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T324toP4 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-324" && selectedPumps.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={55} top={187} left={651} color={color} />

      <Valve toUp top={170} left={706} title={"Б"} valveColor={valveColor} />

      <Line isHorizontal length={70} top={187} left={735} color={color} />

      <Line length={15} top={187} left={804} color={color} />

      <Valve
        top={201}
        left={798}
        title={"ЗМ-4"}
        valveColor={valveColor}
        gapValve="12px"
      />

      <Line length={25} top={231} left={804} color={color} />

      <Line isHorizontal length={55} top={251} left={756} color={color} />

      <Line length={25} top={251} left={756} color={color} />

      <Valve
        top={275}
        left={751}
        title={"ЗМ-6"}
        valveColor={valveColor}
        gapValve="12px"
      />

      <Line length={122} top={305} left={756} color={color} />

      <Valve
        top={427}
        left={751}
        title={"107"}
        valveColor={valveColor}
        gapValve="2px"
      />

      <Line length={323} top={456} left={757} color={color} />

      <Line isHorizontal length={130} top={774} left={757} color={color} />

      <Line length={30} top={751} left={885} color={color} />

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line length={240} top={751} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={962} color={color} />

      <Valve toUp top={967} left={1037} title={"73"} valveColor={valveColor} />

      <Line isHorizontal length={1050} top={984} left={1066} color={color} />

      <Valve toUp top={966} left={2116} title={"27"} valveColor={valveColor} />

      <Line isHorizontal length={90} top={984} left={2146} color={color} />

      <Line length={400} top={984} left={2229} color={color} />

      <Line isHorizontal length={25} top={1384} left={2229} color={color} />

      <Valve toUp top={1366} left={2254} title={"20"} valveColor={valveColor} />

      <Line isHorizontal length={275} top={1384} left={2282} color={color} />

      <Line length={88} top={1384} left={2550} color={color} />

      <Valve top={1472} left={2545} title={"29"} valveColor={valveColor} />

      <Line length={25} top={1501} left={2550} color={color} />

      <Line isHorizontal length={25} top={1519} left={2532} color={color} />

      <Line length={67} top={1519} left={2532} color={color} />

      <Line isHorizontal length={38} top={1585} left={2532} color={color} />
    </div>
  );
};

export default T324toP4;
