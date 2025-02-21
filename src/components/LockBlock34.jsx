import Line from "./sigments/Line.jsx";
import Valve from "./sigments/Valve.jsx";

const LockBlock34 = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line isHorizontal length={30} top={984} left={2236} />
      <Valve toUp top={967} left={2265} title="34" valveColor="red" />
      <Line isHorizontal length={52} top={984} left={2295} />

      <Line isHorizontal length={20} top={791} left={2493} />
      <Valve toUp top={774} left={2463} title={"ЗМ-48"} valveColor="red" />
      <Line isHorizontal length={24} top={791} left={2440} />

      <Line isHorizontal length={60} top={791} left={2506} />
      <Line length={85} top={791} left={2559} />
      <Line isHorizontal length={20} top={876} left={2559} />
      <Valve toUp top={859} left={2579} title={"ЗМ-49"} valveColor={"red"} />
      <Line isHorizontal length={47} top={877} left={2609} />
    </div>
  );
};

export default LockBlock34;
