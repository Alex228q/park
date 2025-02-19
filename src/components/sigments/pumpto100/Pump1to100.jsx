import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import useStore from "../../../store/store.js";

const Pump1to100 = () => {
  const { selectedPumps115, selectedReck, selectedTank, deepMazut } =
    useStore();

  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    selectedReck === "910-100 (3)" &&
    selectedPumps115.includes("H-1") &&
    deepMazut.includes(selectedTank)
  ) {
    color = "green";
    index = 20;
    valveColor = "green";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={19} top={1591} left={499} color={color} />
      <Line length={160} top={1591} left={511} color={color} />
      <Valve title={"15"} top={1750} left={506} valveColor={valveColor} />
      <Line length={40} top={1779} left={511} color={color} />
      <Line isHorizontal length={307} top={1812} left={211} color={color} />
      <Line length={200} top={1812} left={211} color={color} />

      <Valve title={"89"} top={2010} left={206} valveColor={valveColor} />

      <Line length={161} top={2039} left={211} color={color} />
    </div>
  );
};

export default Pump1to100;
