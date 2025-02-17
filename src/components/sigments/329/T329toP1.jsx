import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const T329toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-329" && selectedPumps.includes("H-1")) {
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
      <Line length={300} top={691} left={2440} color={color} />
      <Line isHorizontal length={100} top={984} left={2347} color={color} />
      <Line length={300} top={984} left={2347} color={color} />
      <Line isHorizontal length={113} top={1277} left={2241} color={color} />
      <ArcHorizontal top={1262} left={2217} color={color} />
      <Line isHorizontal length={424} top={1277} left={1800} color={color} />
      <Line length={189} top={1277} left={1800} color={color} />
      <Valve top={1466} left={1794} title={"4"} valveColor={valveColor} />
      <Line length={90} top={1496} left={1800} color={color} />
      <Line isHorizontal length={32} top={1579} left={1800} color={color} />
    </div>
  );
};

export default T329toP1;
