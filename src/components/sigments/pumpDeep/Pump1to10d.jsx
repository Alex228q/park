import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump1to10d = () => {
  const { selectedPumps, selectedReck, selectedTank,deepMazut } = useStore();
  

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-10 (2)" &&
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
      <Line length={341} top={1837} left={2831} color={color} />
      <Line isHorizontal length={171} top={2172} left={2831} color={color} />
      <Valve toUp top={2156} left={3002} title={"61"} valveColor={valveColor} />
      <Line isHorizontal length={17} top={2173} left={3032} color={color} />
      <Line length={27} top={2173} left={3042} color={color} />
    </div>
  );
};

export default Pump1to10d;
