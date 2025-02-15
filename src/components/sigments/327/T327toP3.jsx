import Line from "../Line.jsx";
import Valve from "../Valve.jsx";

import useStore from "../../../store/store.js";

const T327toP3 = () => {
  const { selectedTank, selectedPumps } = useStore();
  let color = "gray";
  let index = 1;
  let valveColor = "red";
  if (selectedTank === "E-327" && selectedPumps.includes("H-3")) {
    color = "green";
    index = 20;
    valveColor = "green";

  }
  return (
    <div style={{ zIndex: index, position: "absolute" }}>
     
    </div>
  );
};

export default T327toP3;
