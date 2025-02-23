import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const Pump4to100p = () => {
  const { selectedPumps115, selectedReck, selectedTank, pstMazut } = useStore();

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-100 (3)" &&
    selectedPumps115.includes("H-4") &&
    pstMazut.includes(selectedTank)
  ) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={19} top={1591} left={1099} color={color} />
      <Line length={120} top={1591} left={1111} color={color} />
      <Line isHorizontal length={100} top={1704} left={1111} color={color} />
      <Line length={46} top={1704} left={1204} color={color} />
      <Valve
        title={"ЗМ-32"}
        top={1749}
        left={1198}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={28} top={1779} left={1204} color={color} />
      <Arc top={1801} left={1218} color={color} />
      <Line length={49} top={1825} left={1204} color={color} />
      <Line isHorizontal length={907} top={1868} left={304} color={color} />
      <Line length={140} top={1868} left={304} color={color} />
      <Valve title={"88"} top={2007} left={299} valveColor={valveColor} />
      <Line length={163} top={2037} left={304} color={color} />
    </div>
  );
};

export default Pump4to100p;
