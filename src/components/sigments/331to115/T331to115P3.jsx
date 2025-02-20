import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T331to115P3 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-331" && selectedPumps115.includes("H-3")) {
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
<Line length={107} top={691} left={2440} color={color} />
<Line isHorizontal length={542} top={691} left={1905} color={color} />
<Line isHorizontal length={20} top={791} left={2493} color={color} />
<Valve toUp top={774} left={2463} title={"48"} valveColor={valveColor} />
<Line isHorizontal length={24} top={791} left={2440} color={color} />
      <Line isHorizontal length={331} top={773} left={1581} color={color} />
      <Line length={30} top={750} left={1905} color={color} />
      <Valve top={721} left={1899} title={"47"} valveColor={valveColor} />
      <Line length={30} top={691} left={1905} color={color} />
      <Line length={205} top={773} left={1581} color={color} />
      <Arc top={972} left={1595} color={color} />
      <Line length={65} top={996} left={1581} color={color} />
      <Arc top={1055} left={1595} color={color} />
      <Line length={200} top={1079} left={1581} color={color} />
      <Line isHorizontal length={823} top={1279} left={765} color={color} />

      <Line length={50} top={1279} left={765} color={color} />
      <Valve
        top={1329}
        left={759}
        title={"ЗМ-24"}
        valveColor={valveColor}
        gapValve="17px"
      />
      <Line length={230} top={1359} left={765} color={color} />
      <Line isHorizontal length={37} top={1589} left={765} color={color} />
    </div>
  );
};

export default T331to115P3;
