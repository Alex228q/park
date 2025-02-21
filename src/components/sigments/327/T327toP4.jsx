import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const T327toP4 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-327" && selectedPumps.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={30} top={292} left={1625} color={color} />
      <Valve top={321} left={1620} title={"Б"} valveColor={valveColor} />
      <Line length={15} top={351} left={1625} color={color} />
      <Line isHorizontal length={200} top={359} left={1432} color={color} />
      <Line length={420} top={359} left={1432} color={color} />
      <Line isHorizontal length={100} top={773} left={1432} color={color} />
      <Valve toUp top={756} left={1532} title={"ЗМ-46"} valveColor={valveColor} />
      <Line isHorizontal length={350} top={773} left={1562} color={color} />
      <Line length={30} top={750} left={1905} color={color} />
      <Valve top={721} left={1899} title={"ЗМ-47"} valveColor={valveColor}  gapValve="12px"/>
      <Line length={30} top={691} left={1905} color={color} />
      <Line isHorizontal length={540} top={691} left={1905} color={color} />
      <Line length={540} top={691} left={2440} color={color} />
      <Line isHorizontal length={48} top={1225} left={2440} color={color} />

      <Line length={147} top={1225} left={2481} color={color} />
      <Arc left={2494} top={1372} color={color} />

      <Line length={76} top={1396} left={2480} color={color} />
      <Valve top={1472} left={2474} title={"30"} valveColor={valveColor} />
      <Line length={18} top={1502} left={2480} color={color} />
      <Line isHorizontal length={59} top={1519} left={2480} color={color} />
      <Line length={67} top={1519} left={2532} color={color} />

      <Line isHorizontal length={38} top={1585} left={2532} color={color} />
    </div>
  );
};

export default T327toP4;
