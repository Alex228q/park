import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T331toP3 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-331" && selectedPumps.includes("H-3")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
       <Line length={27} top={294} left={2569} color={color} />

<Valve top={321} left={2563} title={"Б"} valveColor={valveColor} />

<Line length={29} top={351} left={2569} color={color} />

<Line isHorizontal length={150} top={373} left={2426} color={color} />

<Line length={277} top={373} left={2426} color={color} />

<Line isHorizontal length={87} top={643} left={2426} color={color} />

<Line length={155} top={643} left={2506} color={color} />

<Line isHorizontal length={20} top={791} left={2493} color={color} />
<Valve toUp top={774} left={2463} title={"48"} valveColor={valveColor} />
<Line isHorizontal length={24} top={791} left={2440} color={color} />
     <Line length={440} top={791} left={2440} color={color} />

      <Line isHorizontal length={48} top={1225} left={2440} color={color} />

      <Line length={147} top={1225} left={2481} color={color} />
      <Arc left={2494} top={1372} color={color} />

      <Line length={76} top={1396} left={2480} color={color} />
      <Valve top={1472} left={2474} title={"30"} valveColor={valveColor} />
      <Line length={18} top={1502} left={2480} color={color} />
      <Line isHorizontal length={59} top={1519} left={2480} color={color} />
      <Line length={88} top={1384} left={2550} color={color} />

      <Valve top={1472} left={2545} title={"29"} valveColor={valveColor} />

      <Line length={25} top={1501} left={2550} color={color} />

      <Line isHorizontal length={25} top={1519} left={2532} color={color} />

      <Line isHorizontal length={257} top={1384} left={2300} color={color} />
      <Line length={88} top={1384} left={2300} color={color} />

      <Valve top={1472} left={2294} title={"36"} valveColor={valveColor} />

      <Line length={82} top={1502} left={2300} color={color} />

      <Line isHorizontal length={20} top={1584} left={2300} color={color} />
    </div>
  );
};

export default T331toP3;
