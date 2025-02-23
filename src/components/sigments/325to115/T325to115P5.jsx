import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T325to115P5 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-325" && selectedPumps115.includes("H-5")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line length={30} top={297} left={1039} color={color} />
      <Valve top={327} left={1034} title={"Б"} valveColor={valveColor} />
      <Line length={15} top={357} left={1039} color={color} />
      <Line isHorizontal length={134} top={365} left={912} color={color} />
      <Line length={329} top={365} left={910} color={color} />
      <Line length={67} top={691} left={910} color={color} />
      <Line isHorizontal length={57} top={751} left={860} color={color} />{" "}
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
      <Line isHorizontal length={906} top={1251} left={350} color={color} />
      <Line length={24} top={1251} left={1249} color={color} />
      <Arc color={color} top={1269} left={1263} />
      <Line length={65} top={1293} left={1249} color={color} />
      <Valve
        top={1358}
        left={1244}
        title={"ЗМ-35"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={30} top={1388} left={1249} color={color} />
      <Line isHorizontal length={90} top={1411} left={1165} color={color} />
      <Line length={185} top={1411} left={1165} color={color} />
      <Line isHorizontal length={37} top={1589} left={1165} color={color} />
    </div>
  );
};

export default T325to115P5;
