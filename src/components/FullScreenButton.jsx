import React, { useState } from "react";

const FullScreenButton = ({ top, right }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (isFullscreen) {
      // Если уже в полноэкранном режиме, выходим из него
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    } else {
      // Если не в полноэкранном режиме, заходим в него
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  return (
    <img
      src="./expand.png"
      onClick={handleFullscreen}
      style={{
        zIndex: 9999,
        position: "fixed",
        top: top || "40px",
        right: right || "40px",
        width: "40px",
        height: "40px",
        cursor: "pointer",
      }}
    />
  );
};

export default FullScreenButton;
