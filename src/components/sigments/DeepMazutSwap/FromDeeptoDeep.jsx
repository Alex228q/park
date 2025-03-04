import Line from "../Line.jsx";
import Valve from "../Valve.jsx";
import Arc from "../../Arc.jsx";
import useStore from "../../../store/store.js";
import ArcHorizontal from "../../ArcHorizontal.jsx";

const FromDeeptoDeep = () => {
  const {
    selectedTank,
    selectedTankForSwap,

    isSwap,
    deepMazut,
  } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";

  if (
    deepMazut.includes(selectedTank) &&
    isSwap &&
    deepMazut.includes(selectedTankForSwap) &&
    selectedTank !== selectedTankForSwap
  ) {
    color = "#FE9A00";
    index = 30;
    valveColor = "#FE9A00";
  }

  return (
    <div style={{ zIndex: index, position: "absolute" }}>
      <Line isHorizontal top={1586} length={20} left={2179} color={color} />
      <Line top={1515} length={73} left={2192} color={color} />
      <Line isHorizontal top={1515} length={33} left={2162} color={color} />
      <Valve valveColor={valveColor} top={1498} left={2133} toUp title="122" />
      <Line isHorizontal top={1515} length={64} left={2069} color={color} />
      <ArcHorizontal top={1501} left={2045} color={color} />
      <Line isHorizontal top={1515} length={64} left={1988} color={color} />
      <Arc top={1265} left={2003} color={color} />

      <Line top={1289} length={230} left={1988} color={color} />
      <Line top={996} length={275} left={1988} color={color} />
      <Arc top={972} left={2003} color={color} />
      <Line top={827} length={151} left={1988} color={color} />
      <Line isHorizontal top={827} length={400} left={1593} color={color} />
      <ArcHorizontal top={813} left={1569} color={color} />
      <Line isHorizontal top={827} length={160} left={1416} color={color} />
      <Line top={666} length={165} left={1416} color={color} />

      <Line isHorizontal top={1586} length={20} left={2419} color={color} />
      <Line top={1519} length={73} left={2432} color={color} />
      <Line isHorizontal top={1519} length={73} left={2311} color={color} />
      <Valve valveColor={valveColor} top={1501} left={2383} toUp title="123" />
      <Line isHorizontal top={1519} length={20} left={2413} color={color} />

      <ArcHorizontal top={1505} left={2287} color={color} />
      <Line isHorizontal top={1532} length={89} left={2205} color={color} />
      <Line top={1524} length={10} left={2287} color={color} />
      <Line
        isHorizontal
        top={1530}
        length={30}
        left={2180}
        color={color}
        thickness={11}
      />

      <Line isHorizontal top={1532} length={78} left={2102} color={color} />
      <Line top={1515} length={20} left={2102} color={color} />
    </div>
  );
};

export default FromDeeptoDeep;
