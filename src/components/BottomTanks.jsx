import Tank from "./Tank";
import Blank from "./Blank";

const BottomTanks = () => {
  return (
    <>
      <Tank title="E-322" top={450} left={150} />
      <Tank title="E-326" top={450} left={190 * 5} />
      <Tank title="E-328" top={450} left={190 * 7} />
      <Tank title="E-330" top={450} left={190 * 9} />
      <Tank title="E-332" top={450} left={190 * 11} />
      <Tank title="E-334" top={450} left={190 * 13} />
      <Blank top={150} left={170 * 15} />
    </>
  );
};

export default BottomTanks;
