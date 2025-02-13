import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T322toP4 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-322" && selectedPumps.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={33} top={553} left={292} color={color} />

      <Valve toUp top={535} left={325} title={"Б"} valveColor={valveColor} />

      <Line isHorizontal length={110} top={553} left={354} color={color} />

      <Valve toUp top={535} left={464} title={"ЗМ-8"} valveColor={valveColor} />

      <Line isHorizontal length={65} top={553} left={493} color={color} />

      <Line length={241} top={553} left={556} color={color} />

      <Line isHorizontal length={330} top={794} left={556} color={color} />

      <Line length={50} top={751} left={885} color={color} />

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

export default T322toP4;
