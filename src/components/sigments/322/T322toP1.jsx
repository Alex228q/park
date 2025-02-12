import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T322toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-322" && selectedPumps.includes("H-1")) {
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

      <Line length={225} top={553} left={556} color={color} />

      <Line isHorizontal length={330} top={774} left={556} color={color} />

      <Line length={30} top={751} left={885} color={color} />

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line isHorizontal length={30} top={751} left={885} color={color} />

      <Line length={240} top={751} left={910} color={color} />
      {/* /////////////////////////////////////// */}

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

export default T322toP1;
