import Tank from "./components/Tank.jsx";
import Blank from "./components/Blank.jsx";

const App = () => {
  return (
    <div className="relative">
      <Tank title="E-323" top={150} left={150} />
      <Tank title="E-324" top={150} left={150 * 3} />
      <Tank title="E-325" top={150} left={150 * 5} />
      <Tank title="E-327" top={150} left={150 * 7} />
      <Tank title="E-329" top={150} left={150 * 9} />
      <Tank title="E-331" top={150} left={150 * 11} />
      <Tank title="E-333" top={150} left={150 * 13} />
      <Blank top={150} left={150 * 15} />
    </div>
  );
};

export default App;
