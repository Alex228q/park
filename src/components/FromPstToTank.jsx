import React from "react";
import Line from "./sigments/Line";
import Valve from "./sigments/Valve";
import Arc from "./Arc";
import ArcHorizontal from "./ArcHorizontal";
import SmallValve from "./sigments/SmallValve";

const FromPstToTank = () => {
  return (
    <div style={{ position: "absolute" }}>
      <Line left={2560} length={30} color="#6b79e7" thickness={4} />
      <Line
        top={29}
        isHorizontal
        left={2541}
        length={23}
        color="#6b79e7"
        thickness={4}
      />
      <SmallValve
        toUp
        top={20}
        left={2526}
        title={"17"}
        valveColor={"#6b79e7"}
      />
      <Line
        top={29}
        isHorizontal
        left={2516}
        length={10}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={30} top={29} left={2516} color="#6b79e7" thickness={4} />

      <Line
        isHorizontal
        length={982}
        top={58}
        left={1650}
        color="#6b79e7"
        thickness={4}
      />
      <SmallValve
        toUp
        top={49}
        left={2632}
        title={"100"}
        valveColor={"#6b79e7"}
      />
      <SmallValve
        toUp
        top={50}
        left={1635}
        title={"51A"}
        valveColor={"#6b79e7"}
      />
      <Line
        isHorizontal
        length={20}
        top={58}
        left={1615}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={29} top={58} left={1615} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={329}
        top={83}
        left={1288}
        color="#6b79e7"
        thickness={4}
      />

      <SmallValve
        toUp
        top={74}
        left={1273}
        title={"51"}
        valveColor={"#6b79e7"}
      />

      <Line
        isHorizontal
        length={342}
        top={83}
        left={931}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={50} top={83} left={931} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={40}
        top={129}
        left={895}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={20} top={129} left={895} color="#6b79e7" thickness={4} />

      <SmallValve top={149} left={893} title={"80"} valveColor={"#6b79e7"} />

      <Line length={515} top={164} left={895} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={109}
        top={678}
        left={895}
        color="#6b79e7"
        thickness={4}
      />

      <SmallValve top={628} left={1000} title={"A"} valveColor={"#6b79e7"} />
      <Line length={39} top={643} left={1003} color="#6b79e7" thickness={4} />
      <Line length={32} top={596} left={1003} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={110}
        top={358}
        left={895}
        color="#6b79e7"
        thickness={4}
      />

      <SmallValve top={335} left={1000} title={"A"} valveColor={"#6b79e7"} />
      <Line length={12} top={350} left={1003} color="#6b79e7" thickness={4} />
      <Line length={40} top={295} left={1003} color="#6b79e7" thickness={4} />

      <Line
        isHorizontal
        length={70}
        top={58}
        left={2647}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={625} top={60} left={2713} color="#6b79e7" thickness={4} />

      <Line
        isHorizontal
        length={186}
        top={355}
        left={2714}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={14} top={343} left={2896} color="#6b79e7" thickness={4} />
      <SmallValve top={328} left={2893} title={"A"} valveColor={"#6b79e7"} />
      <Line length={35} top={293} left={2895} color="#6b79e7" thickness={4} />

      <Line
        isHorizontal
        length={188}
        top={656}
        left={2713}
        color="#6b79e7"
        thickness={4}
      />

      <Line length={29} top={631} left={2898} color="#6b79e7" thickness={4} />
      <SmallValve top={616} left={2895} title={"A"} valveColor={"#6b79e7"} />
      <Line length={22} top={594} left={2898} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={192}
        top={681}
        left={2525}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={42} top={642} left={2525} color="#6b79e7" thickness={4} />
      <SmallValve top={627} left={2523} title={"A"} valveColor={"#6b79e7"} />
      <Line length={32} top={595} left={2525} color="#6b79e7" thickness={4} />

      <Line
        isHorizontal
        length={426}
        top={414}
        left={470}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={20} top={414} left={470} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={31}
        top={433}
        left={443}
        color="#6b79e7"
        thickness={4}
      />

      <SmallValve
        toUp
        top={424}
        left={428}
        title={"ЗМ-2"}
        valveColor={"#6b79e7"}
      />

      <Line
        isHorizontal
        length={60}
        top={433}
        left={368}
        color="#6b79e7"
        thickness={4}
      />
      <Line length={187} top={250} left={368} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={20}
        top={250}
        left={351}
        color="#6b79e7"
        thickness={4}
      />

      <SmallValve
        toUp
        top={241}
        left={336}
        title={"A"}
        valveColor={"#6b79e7"}
      />

      <Line
        isHorizontal
        length={42}
        top={250}
        left={294}
        color="#6b79e7"
        thickness={4}
      />

      <Line length={117} top={298} left={707} color="#6b79e7" thickness={4} />
      <SmallValve
        top={283}
        left={704}
        title={"ЗМ-7"}
        valveColor={"#6b79e7"}
        gapValve="8px"
      />
      <Line length={36} top={247} left={707} color="#6b79e7" thickness={4} />
      <Line
        isHorizontal
        length={14}
        top={247}
        left={697}
        color="#6b79e7"
        thickness={4}
      />
      <SmallValve
        toUp
        top={238}
        left={682}
        title={"A"}
        valveColor={"#6b79e7"}
      />
      <Line
        isHorizontal
        length={28}
        top={247}
        left={654}
        color="#6b79e7"
        thickness={4}
      />
      {/* ******************************************************** */}

      <Line
        isHorizontal
        top={3}
        length={140}
        left={2420}
        color="#5fa6e3"
        thickness={4}
      />
      <Line length={8} top={6} left={2420} color="#5fa6e3" thickness={4} />

      <SmallValve top={14} left={2417} title={"76"} valveColor={"#5fa6e3"} />
      <Line length={7} top={29} left={2420} color="#5fa6e3" thickness={4} />
      <Line
        isHorizontal
        length={25}
        top={32}
        left={2398}
        color="#5fa6e3"
        thickness={4}
      />

      <SmallValve
        toUp
        top={24}
        left={2383}
        title={"75"}
        valveColor={"#5fa6e3"}
      />

      <Line
        isHorizontal
        length={119}
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
    </div>
  );
};

export default FromPstToTank;
