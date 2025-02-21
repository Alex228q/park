import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T330to115P2 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-330" && selectedPumps115.includes("H-2")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
       <Line length={17} top={594} left={2000} color={color} />
      <Valve top={610} left={1994} title={"Б"} valveColor={valveColor} />
      <Line length={23} top={640} left={2000} color={color} />
      <Line isHorizontal length={196} top={658} left={1811} color={color} />
      <Line length={40} top={658} left={1811} color={color} />
      <Line isHorizontal length={101} top={691} left={1811} color={color} />
      <Line isHorizontal length={331} top={773} left={1581} color={color} />
      <Line length={30} top={750} left={1905} color={color} />
      <Valve top={721} left={1899} title={"ЗМ-47"} valveColor={valveColor}  gapValve="12px"/>
      <Line length={30} top={691} left={1905} color={color} />
      <Line length={205} top={773} left={1581} color={color} />
      <Arc top={972} left={1595} color={color} />
      <Line length={65} top={996} left={1581} color={color} />
      <Arc top={1055} left={1595} color={color} />
      <Line length={200} top={1079} left={1581} color={color} />
      <Line isHorizontal length={1023} top={1279} left={565} color={color} />

      <Line length={50} top={1279} left={565} color={color} />
      <Valve
        top={1329}
        left={559}
        title={"ЗМ-18"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={230} top={1359} left={565} color={color} />
      <Line isHorizontal length={37} top={1589} left={565} color={color} />
    </div>
  );
};

export default T330to115P2;
