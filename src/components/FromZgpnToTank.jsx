import Arc from "./Arc";
import ArcHorizontal from "./ArcHorizontal";
import Line from "./sigments/Line";
import Valve from "./sigments/Valve";

const FromZgpnToTank = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line left={1841} length={41} color="#bb34e0" />
      <Arc left={1855} top={35} color="#bb34e0" />
      <Line left={1841} length={31} top={59} color="#bb34e0" />
      <Arc left={1855} top={84} color="#bb34e0" />
      <Line isHorizontal left={1815} length={26} top={144} />
      <Valve toUp top={127} left={1785} title="134" />
      <Line isHorizontal left={1743} length={42} top={144} />

      <Line left={1841} length={62} top={108} color="#bb34e0" />

      <Valve top={170} left={1835} valveColor="#bb34e0" title="135" />
      <Line left={1841} length={42} top={200} color="#bb34e0" />
      <Line isHorizontal left={1815} length={33} top={238} color="#bb34e0" />
      <Valve toUp top={220} left={1785} title="C-1" valveColor="#bb34e0" />
      <Line isHorizontal left={1740} length={45} top={238} color="#bb34e0" />
      <Line left={1736} length={46} top={199} color="#bb34e0" />
      <Valve top={170} left={1730} valveColor="#bb34e0" title="136" />
      <Line left={1736} length={57} top={113} color="#bb34e0" />
      <Line isHorizontal left={1688} length={55} top={113} color="#bb34e0" />
      <Line left={1684} length={12} top={113} color="#bb34e0" />
      <Valve top={125} left={1678} valveColor="#bb34e0" title="137" />
      <Line isHorizontal left={1656} length={35} top={160} color="#bb34e0" />
      <Line left={1656} length={28} top={139} color="#bb34e0" />
      <Line isHorizontal left={1548} length={115} top={139} color="#bb34e0" />
      <Valve toUp top={121} left={1518} valveColor="#bb34e0" title="53" />
      <Line isHorizontal left={1488} length={30} top={139} color="#bb34e0" />
      <Line left={1488} length={70} top={139} color="#bb34e0" />
      <Line isHorizontal left={1415} length={80} top={203} color="#bb34e0" />
      <Valve toUp top={186} left={1386} valveColor="#bb34e0" title="55" />
      <Line isHorizontal left={1366} length={20} top={203} color="#bb34e0" />
      <Line left={1366} length={463} top={203} color="#bb34e0" />
      <Line isHorizontal left={1366} length={62} top={664} color="#bb34e0" />
      <ArcHorizontal top={651} left={1421} color="#bb34e0" />
      <Line isHorizontal left={1445} length={117} top={664} color="#bb34e0" />
      <Line left={1560} length={29} top={642} color="#bb34e0" />
      <Valve top={612} left={1554} valveColor="#bb34e0" title="A" />
      <Line left={1560} length={24} top={588} color="#bb34e0" />

      <Line isHorizontal left={1369} length={209} top={350} color="#bb34e0" />
      <Line left={1573} length={9} top={348} color="#bb34e0" />
      <Valve top={318} left={1567} valveColor="#bb34e0" title="A" />
      <Line left={1573} length={22} top={296} color="#bb34e0" />

      <Line left={1684} length={194} top={155} color="#bb34e0" />
      <Line isHorizontal left={1684} length={277} top={348} color="#bb34e0" />
      <Valve top={318} left={1945} valveColor="#bb34e0" title="A" />
      <Line left={1951} length={24} top={294} color="#bb34e0" />
      <Line left={1770} length={300} top={349} color="#bb34e0" />
      <Line isHorizontal left={1770} length={36} top={645} color="#bb34e0" />
      <ArcHorizontal left={1799} top={628} color="#bb34e0" />
      <Line isHorizontal left={1823} length={128} top={645} color="#bb34e0" />

      <Valve top={610} left={1942} valveColor="#bb34e0" title="A" />
      <Line left={1948} length={12} top={640} color="#bb34e0" />
      <Line left={1948} length={15} top={595} color="#bb34e0" />
      <Line isHorizontal left={1684} length={210} top={280} color="#bb34e0" />
      <Line left={1891} length={147} top={140} color="#bb34e0" />
      <Line isHorizontal left={1891} length={147} top={140} color="#bb34e0" />
      <Valve toUp top={123} left={2037} valveColor="#bb34e0" title="57" />
      <Line isHorizontal left={2067} length={50} top={140} color="#bb34e0" />
      <Line left={2110} length={35} top={140} color="#bb34e0" />
      <Line isHorizontal left={2110} length={72} top={168} color="#bb34e0" />
      <ArcHorizontal top={155} left={2176} color="#bb34e0" />
      <Line isHorizontal left={2200} length={18} top={168} color="#bb34e0" />
      <Valve toUp top={151} left={2217} valveColor="#bb34e0" title="58" />
      <Line isHorizontal left={2247} length={28} top={168} color="#bb34e0" />
      <Line left={2274} length={195} top={168} color="#bb34e0" />
      <Line isHorizontal left={2274} length={222} top={356} color="#bb34e0" />
      <Line left={2490} length={12} top={351} color="#bb34e0" />
      <Line left={2490} length={47} top={274} color="#bb34e0" />
    </div>
  );
};

export default FromZgpnToTank;
