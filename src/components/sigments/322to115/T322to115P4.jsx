import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T322to115P4 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-322" && selectedPumps115.includes("H-4")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={33} top={553} left={292} color={color} />

      <Valve toUp top={535} left={325} title={"Б"} valveColor={valveColor} />

      <Line isHorizontal length={110} top={553} left={354} color={color} />

      <Valve toUp top={535} left={464} title={"ЗМ-8"} valveColor={valveColor} />

      <Line isHorizontal length={65} top={553} left={493} color={color} />

      <Line length={241} top={553} left={556} color={color} />

      <Line isHorizontal length={330} top={794} left={556} color={color} />

      <Line length={50} top={751} left={885} color={color} />

      <Line length={71} top={553} left={431} color={color} />
      <Line isHorizontal length={32} top={617} left={431} color={color} />
      <Valve toUp top={600} left={463} title={"ЗМ-9"} valveColor={valveColor} />
      <Line isHorizontal length={20} top={617} left={492} color={color} />
      <Line length={141} top={617} left={505} color={color} />

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

export default T322to115P4;
