import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump1to40 = () => {
  const { selectedPumps, selectedReck, selectedTank } = useStore();
  const deepMazut = ["E-327", "E-328", "E-329", "E-330", "E-331"];

 
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedReck === "910-40 (1)" && selectedPumps.includes("H-1")&&
  !deepMazut.includes(selectedTank)) {
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
      <Line isHorizontal length={230} top={1777} left={2789} color={color} />
      <Valve toUp top={1760} left={3018} valveColor={valveColor} title={"63"} />
      <Line isHorizontal length={40} top={1777} left={3048} color={color} />
      <Line length={127} top={1777} left={3081} color={color} />
    </div>
  );
};

export default Pump1to40;
