import Tank from "./Tank";


const TopTanks = () => {
  return (
    <>
      <Tank title="E-323" top={150} left={150} />
      <Tank title="E-324" top={150} left={170 * 3} />
      <Tank title="E-325" top={150} left={190 * 5} />
      <Tank title="E-327" top={150} left={190 * 8} />
      <Tank title="E-329" top={150} left={190 * 10} />
      <Tank title="E-331" top={150} left={190 * 13} />
      <Tank title="E-333" top={150} left={190 * 15} />
      
    </>
  );
};

export default TopTanks;
