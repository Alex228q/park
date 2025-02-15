import Line from "./sigments/Line.jsx";
import Valve from "./sigments/Valve.jsx";

const LockBlock34 = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line isHorizontal length={30} top={984} left={2236} />
      <Valve toUp top={967} left={2265} title="34" valveColor="red" />
      <Line isHorizontal length={52} top={984} left={2295} />
    </div>
  );
};

export default LockBlock34;
