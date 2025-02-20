import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const T329to115P5 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-329" && selectedPumps115.includes("H-5")) {
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
      <Line isHorizontal length={101} top={691} left={1811} color={color} />
      <Line isHorizontal length={331} top={773} left={1581} color={color} />
      <Line length={30} top={750} left={1905} color={color} />
      <Valve top={721} left={1899} title={"47"} valveColor={valveColor} />
      <Line length={30} top={691} left={1905} color={color} />
      <Line length={205} top={773} left={1581} color={color} />
      <Arc top={972} left={1595} color={color} />
      <Line length={65} top={996} left={1581} color={color} />
      <Arc top={1055} left={1595} color={color} />
      <Line length={200} top={1079} left={1581} color={color} />
      <Line isHorizontal length={423} top={1279} left={1165} color={color} />
      <Line length={50} top={1279} left={1165} color={color} />
      <Valve
        top={1329}
        left={1159}
        title={"ЗМ-36"}
        valveColor={valveColor}
        gapValve="17px"
      />
      <Line length={230} top={1359} left={1165} color={color} />
      <Line isHorizontal length={37} top={1589} left={1165} color={color} />
    </div>
  );
};

export default T329to115P5;
