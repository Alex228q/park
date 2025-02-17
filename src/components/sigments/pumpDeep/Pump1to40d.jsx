import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const Pump1to40d = () => {
  const { selectedPumps, selectedReck, selectedTank , deepMazut } = useStore();
  
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-40 (1)" &&
    selectedPumps.includes("H-1") &&
    deepMazut.includes(selectedTank)
  ) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={19} top={1584} left={1930} color={color} />

      <Line length={260} top={1584} left={1942} color={color} />
      <Line isHorizontal length={60} top={1837} left={1942} color={color} />
      <Valve toUp top={1820} left={2001} title={"2"} valveColor={valveColor} />
      <Line isHorizontal length={727} top={1837} left={2031} color={color} />
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

export default Pump1to40d;
