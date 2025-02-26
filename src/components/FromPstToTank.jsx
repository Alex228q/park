import React from "react";
import Line from "./sigments/Line";
import Valve from "./sigments/Valve";
import Arc from "./Arc";
import ArcHorizontal from "./ArcHorizontal";
import SmallValve from "./sigments/SmallValve";

const FromPstToTank = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line left={2560} length={55} color="#6b79e7" />
      <Line top={53} isHorizontal left={2537} length={30} color="#6b79e7" />
      <Valve toUp top={36} left={2507} title={"17"} valveColor={"#6b79e7"} />
      <Line top={53} isHorizontal left={2497} length={10} color="#6b79e7" />
      <Line length={49} top={53} left={2497} color="#6b79e7" />
      <Line isHorizontal length={140} top={95} left={2497} color="#6b79e7" />
      <Valve toUp top={78} left={2637} title={"100"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={1007} top={95} left={1497} color="#6b79e7" />
      <Valve toUp top={78} left={1467} title={"51A"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={37} top={95} left={1430} color="#6b79e7" />
      <Line length={37} top={95} left={1430} color="#6b79e7" />
      <Line isHorizontal length={37} top={125} left={1400} color="#6b79e7" />
      <Valve toUp top={108} left={1371} title={"51"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={461} top={125} left={910} color="#6b79e7" />
      <Line length={25} top={125} left={903} color="#6b79e7" />
      <Valve top={150} left={897} title={"80"} valveColor={"#6b79e7"} />
      <Line length={160} top={180} left={903} color="#6b79e7" />
      <Line isHorizontal length={85} top={333} left={903} color="#6b79e7" />
      <Line length={9} top={331} left={984} color="#6b79e7" />
      <Valve top={301} left={978} title={"A"} valveColor={"#6b79e7"} />
      <Line length={16} top={286} left={984} color="#6b79e7" />
      <Line length={28} top={333} left={935} color="#6b79e7" />
      <Arc top={355} left={949} color="#6b79e7" />
      <Line length={300} top={379} left={935} color="#6b79e7" />
      <Line isHorizontal length={60} top={679} left={935} color="#6b79e7" />
      <Valve top={619} left={982} title={"A"} valveColor={"#6b79e7"} />
      <Line length={37} top={649} left={988} color="#6b79e7" />
      <Line length={30} top={589} left={988} color="#6b79e7" />
      <Line isHorizontal length={40} top={95} left={2667} color="#6b79e7" />
      <Line length={564} top={95} left={2707} color="#6b79e7" />
      <Arc top={653} left={2721} color="#6b79e7" />
      <Line isHorizontal length={195} top={355} left={2707} color="#6b79e7" />
      <Line length={11} top={351} left={2895} color="#6b79e7" />
      <Valve top={321} left={2889} title={"A"} valveColor={"#6b79e7"} />
      <Line length={28} top={293} left={2895} color="#6b79e7" />
      <Line isHorizontal length={39} top={600} left={2707} color="#6b79e7" />
      <ArcHorizontal top={586} left={2739} color="#6b79e7" />
      <Line length={53} top={604} left={2763} color="#6b79e7" />
      <Line isHorizontal length={140} top={653} left={2763} color="#6b79e7" />
      <Line length={18} top={637} left={2896} color="#6b79e7" />
      <Valve top={607} left={2890} title={"A"} valveColor={"#6b79e7"} />
      <Line length={18} top={589} left={2896} color="#6b79e7" />
      <Line isHorizontal length={201} top={676} left={2523} color="#6b79e7" />
      <Line length={31} top={652} left={2523} color="#6b79e7" />
      <Valve top={622} left={2517} title={"A"} valveColor={"#6b79e7"} />
      <Line length={27} top={595} left={2523} color="#6b79e7" />

      <Line
        isHorizontal
        top={3}
        length={140}
        left={2420}
        color="#5fa6e3"
        thickness={4}
      />
      <Line length={24} top={6} left={2420} color="#5fa6e3" thickness={4} />

      <SmallValve top={30} left={2417} title={"76"} valveColor={"#5fa6e3"} />
      <Line length={10} top={45} left={2420} color="#5fa6e3" thickness={4} />
      <Line
        isHorizontal
        length={38}
        top={52}
        left={2386}
        color="#5fa6e3"
        thickness={4}
      />
      <Line length={10} top={45} left={2386} color="#5fa6e3" thickness={4} />
      <SmallValve top={30} left={2383} title={"75"} valveColor={"#5fa6e3"} />
      <Line length={7} top={23} left={2385} color="#5fa6e3" thickness={4} />
      <Line
        isHorizontal
        length={70}
        top={21}
        left={2319}
        color="#5fa6e3"
        thickness={4}
      />
      <Line length={15} top={21} left={2317} color="#5fa6e3" thickness={4} />
      <Line
        isHorizontal
        length={57}
        top={32}
        left={2264}
        color="#5fa6e3"
        thickness={4}
      />
      <SmallValve
        toUp
        top={23}
        left={2249}
        title={"ЗМ-44"}
        valveColor={"#5fa6e3"}
      />
      <Line
        isHorizontal
        length={1372}
        top={31}
        left={877}
        color="#5fa6e3"
        thickness={4}
      />
      <Line length={466} top={34} left={877} color="#5fa6e3" thickness={4} />
      <Line
        isHorizontal
        length={432}
        top={496}
        left={448}
        color="#5fa6e3"
        thickness={4}
      />

      <Line
        isHorizontal
        length={83}
        top={496}
        left={350}
        color="#5fa6e3"
        thickness={4}
      />
      <SmallValve
        toUp
        top={487}
        left={433}
        title={"ЗМ-10"}
        valveColor={"#5fa6e3"}
      />

      <Line
        isHorizontal
        length={45}
        top={496}
        left={290}
        color="#5fa6e3"
        thickness={4}
      />
      <SmallValve
        toUp
        top={488}
        left={335}
        title={"A"}
        valveColor={"#5fa6e3"}
      />

      <Line isHorizontal length={13} top={414} left={928} color="#6b79e7" />
      <ArcHorizontal top={401} left={898} color="#6b79e7" />
      <Line isHorizontal length={13} top={414} left={890} color="#6b79e7" />

      <ArcHorizontal top={401} left={864} color="#6b79e7" />
      <Line isHorizontal length={102} top={414} left={768} color="#6b79e7" />

      <ArcHorizontal top={401} left={744} color="#6b79e7" />
      <Line isHorizontal length={60} top={414} left={690} color="#6b79e7" />
      <Line length={19} top={401} left={690} color="#6b79e7" />
      <Arc top={377} left={704} color="#6b79e7" />

      <Line length={78} top={305} left={684} color="#6b79e7" />
      <Valve
        top={275}
        left={677}
        title={"ЗМ-7"}
        valveColor={"#6b79e7"}
        gapValve="8px"
      />
      <Line length={10} top={265} left={683} color="#6b79e7" />
      <Valve toUp top={232} left={660} title={"A"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={12} top={250} left={648} color="#6b79e7" />
      <Line isHorizontal length={23} top={264} left={683} color="#6b79e7" />
      <Line length={13} top={254} left={699} color="#6b79e7" />
      <Line isHorizontal length={16} top={249} left={690} color="#6b79e7" />
      <Line isHorizontal length={81} top={442} left={616} color="#6b79e7" />
      <Line length={29} top={416} left={690} color="#6b79e7" />
      <ArcHorizontal top={425} left={592} color="#6b79e7" />
      <Line isHorizontal length={149} top={442} left={450} color="#6b79e7" />
      <Valve toUp top={424} left={420} title={"ЗМ-2"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={54} top={442} left={367} color="#6b79e7" />
      <Line length={192} top={257} left={367} color="#6b79e7" />
      <Line isHorizontal length={11} top={257} left={358} color="#6b79e7" />
      <Valve toUp top={239} left={329} title={"A"} valveColor={"#6b79e7"} />
      <Line isHorizontal length={40} top={257} left={289} color="#6b79e7" />

      <Line left={2188} top={95} length={130} color="#6b79e7" />
      <Line isHorizontal left={2188} top={219} length={30} color="#6b79e7" />
      <Valve toUp top={202} left={2217} title={"59"} valveColor={"#6b79e7"} />
      <Line isHorizontal left={2247} top={219} length={30} color="#6b79e7" />
      <Line left={2270} top={219} length={148} color="#6b79e7" />
      <Line isHorizontal left={2270} top={360} length={230} color="#6b79e7" />
      <Line left={2493} top={351} length={13} color="#6b79e7" />
      <Valve top={321} left={2488} title={"A"} valveColor={"#6b79e7"} />
      <Line left={2493} top={279} length={42} color="#6b79e7" />
    </div>
  );
};

export default FromPstToTank;
