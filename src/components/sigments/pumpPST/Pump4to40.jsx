import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump4to40 = () => {
  const { selectedPumps, selectedReck } = useStore();

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedReck === "910-40 (1)" && selectedPumps.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2670} color={color} />
      <Line length={94} top={1586} left={2683} color={color} />
      <Valve top={1680} left={2678} valveColor={valveColor} title={"28"} />
      <Line length={74} top={1710} left={2683} color={color} />

      <Line isHorizontal length={74} top={1777} left={2687} color={color} />
      <Valve toUp top={1760} left={2760} valveColor={valveColor} title={"67"} />
      <Line isHorizontal length={230} top={1777} left={2789} color={color} />
      <Valve toUp top={1760} left={3018} valveColor={valveColor} title={"63"} />
      <Line isHorizontal length={40} top={1777} left={3048} color={color} />
      <Line length={127} top={1777} left={3081} color={color} />
    </div>
  );
};

export default Pump4to40;
