import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump1to10 = () => {
  const { selectedPumps, selectedReck } = useStore();

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedReck === "910-10 (2)" && selectedPumps.includes("H-1")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={19} top={1584} left={1930} color={color} />

      <Line length={200} top={1584} left={1942} color={color} />
      <Line isHorizontal length={60} top={1777} left={1942} color={color} />
      <Valve toUp top={1760} left={2002} valveColor={valveColor} title={"1"} />
      <Line isHorizontal length={730} top={1777} left={2031} color={color} />

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

export default Pump1to10;
