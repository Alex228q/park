import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T329toP2 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-329" && selectedPumps.includes("H-2")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={30} top={292} left={2005} color={color} />
      <Valve top={321} left={1999} title={"Б"} valveColor={valveColor} />
      <Line length={15} top={351} left={2004} color={color} />
      <Line isHorizontal length={200} top={359} left={1811} color={color} />
      <Line length={333} top={359} left={1811} color={color} />
      <Line isHorizontal length={102} top={691} left={1811} color={color} />
      <Line isHorizontal length={540} top={691} left={1905} color={color} />
      <Line length={540} top={691} left={2440} color={color} />
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
      <Line isHorizontal length={273} top={1384} left={2284} color={color} />
      <Valve toUp top={1366} left={2254} title={"20"} valveColor={valveColor} />
      <Line isHorizontal length={88} top={1384} left={2166} color={color} />
      <Valve toUp top={1366} left={2137} title={"19"} valveColor={valveColor} />
      <Line isHorizontal length={80} top={1383} left={2057} color={color} />
      <Line length={88} top={1383} left={2057} color={color} />
      <Valve top={1470} left={2051} title={"38"} valveColor={valveColor} />
      <Line length={82} top={1500} left={2057} color={color} />
      <Line isHorizontal length={23} top={1582} left={2057} color={color} />
    </div>
  );
};

export default T329toP2;
