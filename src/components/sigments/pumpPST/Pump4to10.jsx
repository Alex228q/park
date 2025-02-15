import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump4to10 = () => {
  const { selectedPumps, selectedReck } = useStore();

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedReck === "910-10 (2)" && selectedPumps.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2670} color={color} />
      <Line length={25} top={1586} left={2683} color={color} />
      <Valve top={1610} left={2678} valveColor={valveColor} title={"28"} />
      <Line length={144} top={1640} left={2683} color={color} />

      <Line isHorizontal length={74} top={1777} left={2687} color={color} />
      <Valve toUp top={1760} left={2760} valveColor={valveColor} title={"67"} />
      <Line isHorizontal length={130} top={1777} left={2789} color={color} />
      <Line length={340} top={1777} left={2912} color={color} />
      <Line isHorizontal length={90} top={2111} left={2912} color={color} />
      <Valve toUp top={2094} left={3002} valveColor={valveColor} title={"62"} />
      <Line isHorizontal length={45} top={2111} left={3032} color={color} />
      <Line length={89} top={2111} left={3070} color={color} />
    </div>
  );
};

export default Pump4to10;
