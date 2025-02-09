import Blank from "./components/Blank.jsx";
import BottomTanks from "./components/BottomTanks.jsx";
import PumpStation35 from "./components/PumpStation35.jsx";
import T326toP1 from "./components/sigments/T326toP1.jsx";
import T326toP2 from "./components/sigments/T326toP2.jsx";
import TopTanks from "./components/TopTanks.jsx";

const App = () => {
  return (
    <div className="relative">
      <TopTanks />
      <BottomTanks />
      <T326toP2 />
      <T326toP1 />

      <PumpStation35 />
      <Blank top={1840} left={1680} />
    </div>
  );
};

export default App;
