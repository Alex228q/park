import React, { useState, useRef } from "react";
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

const App = () => {
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
      <div className="relative">
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
      <Blank top={1840} left={3280} />
    </div>
  );
};

export default App;
