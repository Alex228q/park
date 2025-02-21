import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const T328toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-328" && selectedPumps.includes("H-1")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={19} top={593} left={1618} color={color} />

      <Valve top={612} left={1612} title={"Б"} valveColor={valveColor} />

      <Line length={44} top={642} left={1618} color={color} />

      <Line isHorizontal length={193} top={679} left={1432} color={color} />

      <Line length={100} top={679} left={1432} color={color} />
      <Line isHorizontal length={100} top={773} left={1432} color={color} />
      <Valve toUp top={756} left={1532} title={"ЗМ-46"} valveColor={valveColor} />
      <Line isHorizontal length={350} top={773} left={1562} color={color} />
      <Line length={30} top={750} left={1905} color={color} />
      <Valve top={721} left={1899} title={"ЗМ-47"} valveColor={valveColor}  gapValve="12px"/>
      <Line length={30} top={691} left={1905} color={color} />
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

export default T328toP1;
