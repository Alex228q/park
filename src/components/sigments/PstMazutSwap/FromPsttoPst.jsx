import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const FromPsttoPst = () => {
  const { selectedTank, selectedTankForSwap, isSwap, pstMazut } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    pstMazut.includes(selectedTank) &&
    isSwap &&
    pstMazut.includes(selectedTankForSwap) &&
    selectedTank !== selectedTankForSwap
  ) {
    color = "#FE9A00";
    index = 30;
    valveColor = "#FE9A00";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal length={20} top={1586} left={2670} color={color} />
      <Line length={94} top={1586} left={2683} color={color} />
      <Valve top={1680} left={2678} valveColor={valveColor} title={"28"} />
      <Line length={74} top={1710} left={2683} color={color} />
      <Line isHorizontal length={19} top={1584} left={1930} color={color} />

      <Line length={200} top={1584} left={1942} color={color} />
      <Line isHorizontal length={60} top={1777} left={1942} color={color} />
      <Valve toUp top={1760} left={2002} valveColor={valveColor} title={"1"} />
      <Line isHorizontal length={730} top={1777} left={2031} color={color} />

      <Valve toUp top={1760} left={2760} valveColor={valveColor} title={"67"} />
      <Line isHorizontal length={15} top={1777} left={2790} color={color} />

      <Line length={55} top={1777} left={2802} color={color} />
      <Arc top={1826} left={2816} color={color} />
      <Line length={100} top={1850} left={2802} color={color} />
      <Line isHorizontal length={50} top={1944} left={2759} color={color} />
      <Valve
        toUp
        top={1927}
        left={2729}
        valveColor={valveColor}
        title={"ЗМ-43"}
      />

      <Line isHorizontal length={1089} top={1944} left={1640} color={color} />
      <Line length={779} top={1168} left={1640} color={color} />
      <Line isHorizontal length={53} top={1168} left={1593} color={color} />
      <ArcHorizontal top={1154} left={1569} color={color} />
      <Line isHorizontal length={53} top={1168} left={1523} color={color} />

      <Valve
        toUp
        top={1151}
        left={1493}
        valveColor={valveColor}
        title={"ЗМ-73"}
      />

      <Line isHorizontal length={594} top={1168} left={899} color={color} />
      <Line length={65} top={682} left={898} color={color} />
      <Line length={20} top={745} left={896} color={color} thickness={11} />
      <Line length={409} top={765} left={898} color={color} />
    </div>
  );
};

export default FromPsttoPst;
