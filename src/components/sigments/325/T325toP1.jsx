import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T325toP1 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (selectedTank === "E-325" && selectedPumps.includes("H-1")) {
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

      <Line length={300} top={691} left={910} color={color} />

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

export default T325toP1;
