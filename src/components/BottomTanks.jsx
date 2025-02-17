import Tank from "./Tank";

const BottomTanks = () => {
  return (
    <>
      <Tank title="E-322" top={450} left={150} />
      <Tank title="E-326" top={450} left={190 * 5} />
      <Tank title="E-328" top={450} left={190 * 8} />
      <Tank title="E-330" top={450} left={190 * 10} />
      <Tank title="E-332" top={450} left={190 * 13} />
      <Tank title="E-334" top={450} left={190 * 15} />
    </>
  );
};

export default BottomTanks;
