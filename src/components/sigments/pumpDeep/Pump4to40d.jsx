import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const Pump4to40d = () => {
  const { selectedPumps, selectedReck, selectedTank , deepMazut} = useStore();
 
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-40 (1)" &&
    selectedPumps.includes("H-4") &&
    deepMazut.includes(selectedTank)
  ) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2670} color={color} />
      <Line length={75} top={1586} left={2683} color={color} />
      <Line isHorizontal length={70} top={1654} left={2620} color={color} />
      <Line length={26} top={1654} left={2620} color={color} />
      <Valve top={1680} left={2614} title={"32"} valveColor={valveColor} />
      <Line length={62} top={1709} left={2620} color={color} />
      <Arc color={color} top={1765} left={2634} />
      <Line length={55} top={1789} left={2620} color={color} />

      <Line isHorizontal length={136} top={1837} left={2622} color={color} />
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

export default Pump4to40d;
