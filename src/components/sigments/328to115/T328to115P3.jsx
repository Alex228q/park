import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T328to115P3 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-328" && selectedPumps115.includes("H-3")) {
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
      <Line isHorizontal length={25} top={773} left={1562} color={color} />
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
        gapValve="12px"
      />
      <Line length={230} top={1359} left={765} color={color} />
      <Line isHorizontal length={37} top={1589} left={765} color={color} />
    </div>
  );
};

export default T328to115P3;
