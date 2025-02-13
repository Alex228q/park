import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T323toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-323" && selectedPumps.includes("H-1")) {
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

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line length={240} top={751} left={910} color={color} />

      <Line isHorizontal length={75} top={984} left={910} color={color} />
      <Line length={90} top={984} left={978} color={color} />

      <Line isHorizontal length={60} top={1067} left={978} color={color} />
      <Valve toUp top={1048} left={1036} title={"74"} valveColor={valveColor} />

      <Line isHorizontal length={660} top={1067} left={1064} color={color} />

      <Line length={400} top={1068} left={1718} color={color} />
      <Valve top={1467} left={1713} title={"3"} valveColor={valveColor} />

      <Line length={90} top={1496} left={1719} color={color} />

      <Line isHorizontal length={112} top={1579} left={1719} color={color} />
    </div>
  );
};

export default T323toP1;
