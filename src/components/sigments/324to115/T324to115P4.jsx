import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T324to115P4 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-324" && selectedPumps115.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={55} top={187} left={651} color={color} />

<Valve toUp top={170} left={706} title={"Б"} valveColor={valveColor} />

<Line isHorizontal length={70} top={187} left={735} color={color} />

<Line length={15} top={187} left={804} color={color} />

<Valve
  top={201}
  left={798}
  title={"ЗМ-4"}
  valveColor={valveColor}
  gapValve="12px"
/>

<Line length={25} top={231} left={804} color={color} />

<Line isHorizontal length={55} top={251} left={756} color={color} />

<Line length={25} top={251} left={756} color={color} />

<Valve
  top={275}
  left={751}
  title={"ЗМ-6"}
  valveColor={valveColor}
  gapValve="12px"
/>

<Line length={122} top={305} left={756} color={color} />

      <Valve
        top={427}
        left={751}
        title={"107"}
        valveColor={valveColor}
        gapValve="2px"
      />

      <Line length={339} top={456} left={757} color={color} />

      <Line isHorizontal length={130} top={794} left={757} color={color} />

      <Line length={50} top={751} left={885} color={color} />
      <Line isHorizontal length={32} top={751} left={860} color={color} />
      <Valve
        toUp
        top={734}
        left={830}
        title={"ЗМ-45"}
        valveColor={valveColor}
      />
      <Line isHorizontal length={61} top={751} left={769} color={color} />
      <ArcHorizontal color={color} top={737} left={745} />
      <Line isHorizontal length={184} top={751} left={568} color={color} />
      <ArcHorizontal color={color} top={737} left={544} />
      <Line isHorizontal length={201} top={751} left={350} color={color} />
      <Line length={500} top={751} left={350} color={color} />
      <Line isHorizontal length={706} top={1251} left={350} color={color} />
      <Line length={24} top={1251} left={1049} color={color} />
      <Arc color={color} top={1269} left={1063} />
      <Line length={65} top={1293} left={1049} color={color} />
      <Valve
        top={1358}
        left={1044}
        title={"ЗМ-29"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={30} top={1388} left={1049} color={color} />
      <Line isHorizontal length={90} top={1411} left={965} color={color} />
      <Line length={185} top={1411} left={965} color={color} />
      <Line isHorizontal length={37} top={1589} left={965} color={color} />
    </div>
  );
};

export default T324to115P4;
