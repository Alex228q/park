import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
const Pump2to40d = () => {
  const { selectedPumps, selectedReck, selectedTank , deepMazut} = useStore();
 
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-40 (1)" &&
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
      <Line isHorizontal length={70} top={1677} left={2192} color={color} />
      <Valve toUp top={1660} left={2262} valveColor={valveColor} title={"22"} />
      <Line isHorizontal length={85} top={1677} left={2292} color={color} />
      <Line length={22} top={1677} left={2475} color={color} />
      <Valve top={1699} left={2469} valveColor={valveColor} title={"26"} />
      <Line length={43} top={1729} left={2475} color={color} />
      <Arc color={color} top={1765} left={2489} />
      <Line length={55} top={1789} left={2475} color={color} />
      <Line isHorizontal length={283} top={1837} left={2475} color={color} />
      <Valve toUp top={1820} left={2758} title={"66"} valveColor={valveColor} />
      <Line isHorizontal length={50} top={1837} left={2788} color={color} />
      <Line isHorizontal length={69} top={1837} left={2838} color={color} />
      <ArcHorizontal color={color} left={2900} top={1823} />
      <Line isHorizontal length={92} top={1837} left={2924} color={color} />
      <Valve toUp top={1820} left={3016} title={"64"} valveColor={valveColor} />
      <Line isHorizontal length={10} top={1837} left={3046} color={color} />
      <Line length={67} top={1837} left={3056} color={color} />
    </div>
  );
};

export default Pump2to40d;
