import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump3to40 = () => {
  const { selectedPumps, selectedReck, selectedTank , deepMazut} = useStore();
  

 
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedReck === "910-40 (1)" && selectedPumps.includes("H-3")&&
  !deepMazut.includes(selectedTank)) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2419} color={color} />
      <Line length={30} top={1586} left={2432} color={color} />
      <Valve top={1615} left={2427} valveColor={valveColor} title={"35"} />
      <Line length={39} top={1645} left={2432} color={color} />
      <Line isHorizontal length={32} top={1677} left={2407} color={color} />
      <Valve toUp top={1660} left={2377} valveColor={valveColor} title={"24"} />
      <Line isHorizontal length={70} top={1677} left={2192} color={color} />
      <Valve toUp top={1660} left={2262} valveColor={valveColor} title={"22"} />
      <Line isHorizontal length={85} top={1677} left={2292} color={color} />
      <Line length={8} top={1677} left={2192} color={color} />
      <Valve top={1685} left={2187} valveColor={valveColor} title={"31"} />
      <Line length={69} top={1715} left={2192} color={color} />

      <Line isHorizontal length={568} top={1777} left={2192} color={color} />
      <Valve toUp top={1760} left={2760} valveColor={valveColor} title={"67"} />
      <Line isHorizontal length={230} top={1777} left={2789} color={color} />
      <Valve toUp top={1760} left={3018} valveColor={valveColor} title={"63"} />
      <Line isHorizontal length={40} top={1777} left={3048} color={color} />
      <Line length={127} top={1777} left={3081} color={color} />
    </div>
  );
};

export default Pump3to40;
