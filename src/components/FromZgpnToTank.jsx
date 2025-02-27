import Line from "./sigments/Line";
import SmallValve from "./sigments/SmallValve";

const FromZgpnToTank = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line left={1848} length={93} color="#bb34e0" thickness={4} />
      <Line isHorizontal left={1834} top={83} length={14} thickness={4} />
      <SmallValve toUp left={1819} top={75} title={"134"} />
      <Line isHorizontal left={1786} top={83} length={33} thickness={4} />

      <SmallValve
        left={1845}
        top={93}
        title={"135"}
        valveColor="#bb34e0"
        gapValve="1px"
      />

      <Line left={1848} length={15} top={108} color="#bb34e0" thickness={4} />
      <Line
        isHorizontal
        left={1834}
        length={15}
        top={119}
        color="#bb34e0"
        thickness={4}
      />
      <SmallValve
        toUp
        left={1819}
        top={111}
        title={"С-1"}
        valveColor="#bb34e0"
      />
      <Line
        isHorizontal
        left={1783}
        length={36}
        top={119}
        color="#bb34e0"
        thickness={4}
      />

      <Line left={1782} length={15} top={108} color="#bb34e0" thickness={4} />

      <SmallValve
        left={1779}
        top={93}
        title={"136"}
        valveColor="#bb34e0"
        gapValve="1px"
      />
      <Line left={1782} length={10} top={83} color="#bb34e0" thickness={4} />
      <Line
        isHorizontal
        left={1749}
        length={35}
        top={83}
        color="#bb34e0"
        thickness={4}
      />
      <Line left={1747} length={29} top={83} color="#bb34e0" thickness={4} />

      <SmallValve
        left={1744}
        top={112}
        title={"137"}
        valveColor="#bb34e0"
        gapValve="1px"
      />
      <Line left={1747} length={18} top={127} color="#bb34e0" thickness={4} />
      <Line
        isHorizontal
        left={1730}
        length={21}
        top={142}
        color="#bb34e0"
        thickness={4}
      />
      <Line isHorizontal left={1730} length={17} top={83} thickness={4} />

      <Line isHorizontal left={1694} length={21} top={83} thickness={4} />

      <SmallValve toUp left={1715} top={75} title={"147"} />
      <Line left={1694} length={31} top={83} thickness={4} />
      <Line isHorizontal left={1686} length={9} top={83} thickness={4} />
      <Line isHorizontal left={1686} length={9} top={142} thickness={4} />

      <SmallValve
        toUp
        left={1715}
        top={133}
        title={"53"}
        valveColor="#bb34e0"
      />

      <Line
        isHorizontal
        left={1694}
        length={21}
        top={142}
        color="#bb34e0"
        thickness={4}
      />
      <Line left={1694} length={27} top={116} color="#bb34e0" thickness={4} />
      <Line
        isHorizontal
        left={1686}
        length={12}
        top={114}
        color="#bb34e0"
        thickness={4}
      />
      <SmallValve toUp left={1671} top={75} title={"52"} />
      <Line isHorizontal left={1619} length={52} top={83} thickness={4} />

      <SmallValve
        toUp
        left={1671}
        top={105}
        title={"55"}
        valveColor="#bb34e0"
      />
      <SmallValve toUp left={1671} top={133} title={"148"} />
      <Line
        isHorizontal
        left={1410}
        length={261}
        top={114}
        color="#bb34e0"
        thickness={4}
      />
      <Line left={1410} length={550} top={114} color="#bb34e0" thickness={4} />
      <Line
        isHorizontal
        left={1410}
        length={175}
        top={662}
        color="#bb34e0"
        thickness={4}
      />

      <Line left={1583} length={31} top={635} color="#bb34e0" thickness={4} />
      <SmallValve left={1580} top={620} title={"A"} valveColor="#bb34e0" />
      <Line left={1583} length={23} top={597} color="#bb34e0" thickness={4} />

      <Line
        isHorizontal
        left={1410}
        length={175}
        top={342}
        color="#bb34e0"
        thickness={4}
      />
      <Line left={1583} length={10} top={336} color="#bb34e0" thickness={4} />
      <SmallValve left={1580} top={321} title={"A"} valveColor="#bb34e0" />
      <Line left={1583} length={23} top={298} color="#bb34e0" thickness={4} />
    </div>
  );
};

export default FromZgpnToTank;
