import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const Pump2to10d = () => {
  const { selectedPumps, selectedReck, selectedTank } = useStore();
  const deepMazut = ["E-327", "E-328", "E-329", "E-330", "E-331"];
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-10 (2)" &&
    selectedPumps.includes("H-2") &&
    deepMazut.includes(selectedTank)
  ) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2179} color={color} />
      <Line length={30} top={1586} left={2192} color={color} />
      <Valve top={1616} left={2187} valveColor={valveColor} title={"37"} />
      <Line length={38} top={1645} left={2192} color={color} />
      <Line isHorizontal length={75} top={1677} left={2407} color={color} />
      <Valve toUp top={1660} left={2377} valveColor={valveColor} title={"24"} />
      <Line isHorizontal length={47} top={1677} left={2330} color={color} />
      <Valve toUp top={1660} left={2300} valveColor={valveColor} title={"22"} />
      <Line isHorizontal length={108} top={1677} left={2192} color={color} />
      <Line length={22} top={1677} left={2475} color={color} />
      <Valve top={1699} left={2469} valveColor={valveColor} title={"26"} />
      <Line length={43} top={1729} left={2475} color={color} />
      <Arc color={color} top={1765} left={2489} />
      <Line length={55} top={1789} left={2475} color={color} />
      <Line isHorizontal length={283} top={1837} left={2475} color={color} />
      <Valve toUp top={1820} left={2758} title={"66"} valveColor={valveColor} />

      <Line isHorizontal length={50} top={1837} left={2788} color={color} />
      <Line length={341} top={1837} left={2831} color={color} />
      <Line isHorizontal length={171} top={2172} left={2831} color={color} />
      <Valve toUp top={2156} left={3002} title={"61"} valveColor={valveColor} />
      <Line isHorizontal length={17} top={2173} left={3032} color={color} />
      <Line length={27} top={2173} left={3042} color={color} />
    </div>
  );
};

export default Pump2to10d;
