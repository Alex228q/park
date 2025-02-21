import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";
import Arc from "../../Arc.jsx";

const T327to115P4 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-327" && selectedPumps115.includes("H-4")) {
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
      <Line isHorizontal length={25} top={773} left={1562} color={color} />
      <Line length={205} top={773} left={1581} color={color} />
      <Arc top={972} left={1595} color={color} />
      <Line length={65} top={996} left={1581} color={color} />
      <Arc top={1055} left={1595} color={color} />
      <Line length={200} top={1079} left={1581} color={color} />
      <Line isHorizontal length={623} top={1279} left={965} color={color} />

      <Line length={50} top={1279} left={965} color={color} />
      <Valve
        top={1329}
        left={959}
        title={"ЗМ-30"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={230} top={1359} left={965} color={color} />
      <Line isHorizontal length={37} top={1589} left={965} color={color} />
    </div>
  );
};

export default T327to115P4;
