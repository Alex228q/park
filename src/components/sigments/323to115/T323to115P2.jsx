import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import ArcHorizontal from "../../ArcHorizontal.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";

const T323to115P2 = () => {
  const { selectedTank, selectedPumps115 } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-323" && selectedPumps115.includes("H-2")) {
    color = "green";
    index = 20;
    valveColor = "green";
  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={36} top={196} left={294} color={color} />

      <Valve toUp top={179} left={330} title={"Б"} valveColor={valveColor} />

      <Line isHorizontal length={20} top={196} left={360} color={color} />

      <Line length={194} top={196} left={380} color={color} />

      <Line isHorizontal length={40} top={389} left={380} color={color} />

      <Valve toUp top={372} left={420} title={"ЗМ-3"} valveColor={valveColor} />

      <Line isHorizontal length={308} top={389} left={450} color={color} />

      <Line length={39} top={389} left={756} color={color} />

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

      <Line length={71} top={553} left={431} color={color} />
      <Line isHorizontal length={32} top={617} left={431} color={color} />
      <Valve toUp top={600} left={463} title={"ЗМ-9"} valveColor={valveColor} />
      <Line isHorizontal length={20} top={617} left={492} color={color} />
      <Line length={141} top={617} left={505} color={color} />

      <Line isHorizontal length={61} top={751} left={769} color={color} />
      <ArcHorizontal color={color} top={737} left={745} />
      <Line isHorizontal length={184} top={751} left={568} color={color} />
      <ArcHorizontal color={color} top={737} left={544} />
      <Line isHorizontal length={201} top={751} left={350} color={color} />
      <Line length={500} top={751} left={350} color={color} />
      <Line isHorizontal length={306} top={1251} left={350} color={color} />
      <Line length={24} top={1251} left={649} color={color} />
      <Arc color={color} top={1269} left={663} />
      <Line length={65} top={1293} left={649} color={color} />
      <Valve
        top={1358}
        left={644}
        title={"ЗМ-17"}
        valveColor={valveColor}
        gapValve="12px"
      />
      <Line length={30} top={1388} left={649} color={color} />
      <Line isHorizontal length={90} top={1411} left={565} color={color} />
      <Line length={185} top={1411} left={565} color={color} />
      <Line isHorizontal length={37} top={1589} left={565} color={color} />
    </div>
  );
};

export default T323to115P2;
