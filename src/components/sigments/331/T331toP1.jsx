import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const T331toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-331" && selectedPumps.includes("H-1")) {
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
      <Valve toUp top={774} left={2463} title={"ЗМ-48"} valveColor={valveColor} />
      <Line isHorizontal length={24} top={791} left={2440} color={color} />

      <Line length={200} top={791} left={2440} color={color} />
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

export default T331toP1;
