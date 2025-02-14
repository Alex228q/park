import React, { useState, useRef, useEffect } from "react";
import Blank from "./components/Blank.jsx";
import BottomTanks from "./components/BottomTanks.jsx";
import PumpStation35 from "./components/PumpStation35.jsx";
import T326to35 from "./components/sigments/326/T326to35.jsx";
import T325to35 from "./components/sigments/325/T325to35.jsx";
import T322to35 from "./components/sigments/322/T322to35.jsx";
import TopTanks from "./components/TopTanks.jsx";
import T324to35 from "./components/sigments/324/T324to35.jsx";
import T323to35 from "./components/sigments/323/T323to35.jsx";
import T332to35 from "./components/sigments/332/T332to35.jsx";
import T333to35 from "./components/sigments/333/T333to35.jsx";
import T334to35 from "./components/sigments/334/T334to35.jsx";
import FullScreenButton from "./components/FullScreenButton.jsx";
import LoadingReck40 from "./components/LoadingReck40.jsx";
import Pump1to40 from "./components/sigments/pump1/Pump1to40.jsx";
import Pump2to40 from "./components/sigments/pump1/Pump2to40.jsx";
import Pump3to40 from "./components/sigments/pump1/Pump3to40.jsx";
import Pump4to40 from "./components/sigments/pump1/Pump4to40.jsx";
import useStore from "./store/store.js";

const App = () => {
  const { selectedTank, selectedReck, setSelectedPump } = useStore();
  const leftDirectMazut = ["E-322", "E-323", "E-324", "E-325", "E-326"];
  const rightDirectMazut = ["E-332", "E-333", "E-334"];
  useEffect(() => {
    if (
      leftDirectMazut.includes(selectedTank) &&
      selectedReck === "910-40 (1)"
    ) {
      setSelectedPump("H-1");
      setSelectedPump("H-2");
    }

    if (
      rightDirectMazut.includes(selectedTank) &&
      selectedReck === "910-40 (1)"
    ) {
      setSelectedPump("H-2");
      setSelectedPump("H-3");
    }
  }, [selectedTank, selectedReck, setSelectedPump]);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef(null);

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const handleMouseDown = (e) => {
    if (isMobile) return;
    if (e.button !== 0) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setStartY(e.pageY - containerRef.current.offsetTop);
    setScrollLeft(containerRef.current.scrollLeft);
    setScrollTop(containerRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMobile) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startX) * 2;
    const walkY = (y - startY) * 2;
    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  const handleMouseUp = () => {
    if (isMobile) return;
    setIsDragging(false);
  };
  if (isMobile) {
    return (
      <div ref={containerRef} className="relative">
        <TopTanks />
        <BottomTanks />
        <T322to35 />
        <T323to35 />
        <T324to35 />
        <T325to35 />
        <T326to35 />
        <T332to35 />
        <T333to35 />
        <T334to35 />

        <PumpStation35 />
        <Pump1to40 />
        <Pump2to40 />
        <Pump3to40 />
        <Pump4to40 />
        <LoadingReck40 title="910-40 (1)" top={1900} left={3000} />
        <LoadingReck40 title="910-10 (2)" top={2200} left={3000} />
        <Blank top={1840} left={3680} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen overflow-auto cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      <FullScreenButton />
      <TopTanks />
      <BottomTanks />
      <T322to35 />
      <T323to35 />
      <T324to35 />
      <T325to35 />
      <T326to35 />
      <T332to35 />
      <T333to35 />
      <T334to35 />

      <PumpStation35 />
      <Pump1to40 />
      <Pump2to40 />
      <Pump3to40 />
      <Pump4to40 />
      <LoadingReck40 title="910-40 (1)" top={1900} left={3000} />
      <LoadingReck40 title="910-10 (2)" top={2200} left={3000} />
      <Blank top={2540} left={3780} />
    </div>
  );
};

export default App;
