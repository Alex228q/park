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
import LoadingReck from "./components/LoadingReck40.jsx";
import Pump1to40 from "./components/sigments/pumpPST/Pump1to40.jsx";
import Pump2to40 from "./components/sigments/pumpPST/Pump2to40.jsx";
import Pump3to40 from "./components/sigments/pumpPST/Pump3to40.jsx";
import Pump4to40 from "./components/sigments/pumpPST/Pump4to40.jsx";
import useStore from "./store/store.js";
import Pump1to10 from "./components/sigments/pumpPST/Pump1to10.jsx";
import Pump2to10 from "./components/sigments/pumpPST/Pump2to10.jsx";
import Pump3to10 from "./components/sigments/pumpPST/Pump3to10.jsx";
import Pump4to10 from "./components/sigments/pumpPST/Pump4to10.jsx";
import T327to35 from "./components/sigments/327/T327to35.jsx";
import LockBlock34 from "./components/LockBlock34.jsx";
import T328to35 from "./components/sigments/328/T328to35.jsx";
import T329to35 from "./components/sigments/329/T329to35.jsx";
import T330to35 from "./components/sigments/330/T330to35.jsx";
import T331to35 from "./components/sigments/331/T331to35.jsx";
import Pump1to10d from "./components/sigments/pumpDeep/Pump1to10d.jsx";
import Pump2to10d from "./components/sigments/pumpDeep/Pump2to10d.jsx";
import Pump3to10d from "./components/sigments/pumpDeep/Pump3to10d.jsx";
import Pump4to10d from "./components/sigments/pumpDeep/Pump4to10d.jsx";
import Pump1to40d from "./components/sigments/pumpDeep/Pump1to40d.jsx";
import Pump2to40d from "./components/sigments/pumpDeep/Pump2to40d.jsx";
import Pump3to40d from "./components/sigments/pumpDeep/Pump3to40d.jsx";
import Pump4to40d from "./components/sigments/pumpDeep/Pump4to40d.jsx";

import PumpStation115 from "./components/PumpStation115.jsx";
import T327to115 from "./components/sigments/327to115/T327to115.jsx";
import Pump1to100 from "./components/sigments/pumpto100/Pump1to100.jsx";
import Pump2to100 from "./components/sigments/pumpto100/Pump2to100.jsx";
import Pump3to100 from "./components/sigments/pumpto100/Pump3to100.jsx";
import Pump4to100 from "./components/sigments/pumpto100/Pump4to100.jsx";
import Pump5to100 from "./components/sigments/pumpto100/Pump5to100.jsx";
import T328to115P2 from "./components/sigments/328to115/T328to115P2.jsx";
import T328to115P3 from "./components/sigments/328to115/T328to115P3.jsx";
import T328to115 from "./components/sigments/328to115/T328to115.jsx";
import T329to115 from "./components/sigments/329to115/T329to115.jsx";
import T330to115 from "./components/sigments/330to115/T330to115.jsx";
import T331to115 from "./components/sigments/331to115/T331to115.jsx";
import T331pto35 from "./components/sigments/331p/T331pto35.jsx";
import T322to115 from "./components/sigments/322to115/T322to115.jsx";

const App = () => {
  const {
    selectedTank,
    selectedReck,
    setSelectedPump,
    setSelectedPump115,
    deepMazut,
    pstMazut,
  } = useStore();

  useEffect(() => {
    if (pstMazut.includes(selectedTank) && selectedReck === "910-40 (1)") {
      setSelectedPump("H-2");
      setSelectedPump("H-3");
    }

    if (pstMazut.includes(selectedTank) && selectedReck === "910-10 (2)") {
      setSelectedPump("H-2");
      setSelectedPump("H-3");
    }

    if (deepMazut.includes(selectedTank) && selectedReck === "910-40 (1)") {
      setSelectedPump("H-1");
      setSelectedPump("H-4");
    }

    if (deepMazut.includes(selectedTank) && selectedReck === "910-10 (2)") {
      setSelectedPump("H-1");
      setSelectedPump("H-4");
    }
    if (deepMazut.includes(selectedTank) && selectedReck === "910-100 (3)") {
      setSelectedPump115("H-1");
      setSelectedPump115("H-3");
      setSelectedPump115("H-5");
    }

    if (pstMazut.includes(selectedTank) && selectedReck === "910-100 (3)") {
      setSelectedPump115("H-1");
      setSelectedPump115("H-3");
      setSelectedPump115("H-5");
    }
  }, [
    selectedTank,
    selectedReck,
    setSelectedPump,
    setSelectedPump115,
    deepMazut,
    pstMazut,
  ]);

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
        <T327to35 />
        <T328to35 />
        <T329to35 />
        <T330to35 />
        {deepMazut.includes("E-331") ? <T331to35 /> : <T331pto35 />}

        <T332to35 />
        <T333to35 />
        <T334to35 />

        <PumpStation35 />

        <Pump1to40 />
        <Pump2to40 />
        <Pump3to40 />
        <Pump4to40 />

        <Pump1to10 />
        <Pump2to10 />
        <Pump3to10 />
        <Pump4to10 />

        <Pump1to10d />
        <Pump2to10d />
        <Pump3to10d />
        <Pump4to10d />

        <Pump1to40d />
        <Pump2to40d />
        <Pump3to40d />
        <Pump4to40d />
        <PumpStation115 />
        <T322to115 />

        <T327to115 />
        <T328to115 />
        <T329to115 />
        <T330to115 />
        <T331to115 />

        <Pump1to100 />
        <Pump2to100 />
        <Pump3to100 />
        <Pump4to100 />
        <Pump5to100 />

        <LoadingReck title="910-40 (1)" top={1900} left={3000} />
        <LoadingReck title="910-10 (2)" top={2200} left={3000} />
        <LoadingReck title="910-100 (3)" top={2200} left={200} />

        <LockBlock34 />

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
      <T327to35 />
      <T328to35 />
      <T329to35 />
      <T330to35 />
      {deepMazut.includes("E-331") ? <T331to35 /> : <T331pto35 />}
      <T332to35 />
      <T333to35 />
      <T334to35 />

      <PumpStation35 />
      <Pump1to40 />
      <Pump2to40 />
      <Pump3to40 />
      <Pump4to40 />

      <Pump1to10 />
      <Pump2to10 />
      <Pump3to10 />
      <Pump4to10 />

      <Pump1to10d />
      <Pump2to10d />
      <Pump3to10d />
      <Pump4to10d />

      <Pump1to40d />
      <Pump2to40d />
      <Pump3to40d />
      <Pump4to40d />
      <PumpStation115 />
      <T322to115 />

      <T327to115 />
      <T328to115 />
      <T329to115 />
      <T330to115 />
      <T331to115 />

      <Pump1to100 />
      <Pump2to100 />
      <Pump3to100 />
      <Pump4to100 />
      <Pump5to100 />

      <LoadingReck title="910-40 (1)" top={1900} left={3000} />
      <LoadingReck title="910-10 (2)" top={2200} left={3000} />
      <LoadingReck title="910-100 (3)" top={2200} left={200} />
      <LockBlock34 />
      <Blank top={2540} left={3780} />
    </div>
  );
};

export default App;
