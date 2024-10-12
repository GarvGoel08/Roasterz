import React, { useRef, useState, useEffect } from "react";

const ScrollableContainer = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemListRef = useRef(null);


  const handleScroll = (direction) => {
    const scrollAmount = 160;
    const container = itemListRef.current;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else if (direction === "right") {
        container.scrollLeft += scrollAmount;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>

      <div
        ref={itemListRef}
        className="scroll-container"
        style={{
          overflowX: "auto",
          scrollbarWidth: "thin",
          position: "relative",
          display: "flex",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollableContainer;
