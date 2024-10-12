import React, { useRef, useState, useEffect } from "react";

const ScrollableContainer = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const itemListRef = useRef(null);

  useEffect(() => {
    const updateButtonVisibility = () => {
      const container = itemListRef.current;
      if (!container) return;

      const rightButton = document.querySelector(".scroll-button.right");
      const leftButton = document.querySelector(".scroll-button.left");

      if (scrollPosition < container.scrollWidth - container.clientWidth) {
        rightButton.classList.remove("Collapsed");
      } else {
        rightButton.classList.add("Collapsed");
      }

      if (scrollPosition > 0) {
        leftButton.classList.remove("Collapsed");
      } else {
        leftButton.classList.add("Collapsed");
      }
    };

    updateButtonVisibility();
  }, [scrollPosition, children]); // Listen to children to recheck on new renders

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
    <div className="ItemList d-flex" style={{ overflowX: "hidden", position: "relative" }}>
      <button
        className={`scroll-button left ${scrollPosition > 0 ? "" : "Collapsed"}`}
        onClick={() => handleScroll("left")}
        style={{ left: "0", borderRadius: "0px 10px 10px 0px" }}
      >
        &lt;
      </button>

      <div
        ref={itemListRef}
        className="scroll-container"
        style={{
          overflowX: "hidden",
          scrollbarWidth: "thin",
          position: "relative",
          display: "flex",
        }}
      >
        {children}
      </div>

      <button
        className={`scroll-button right ${scrollPosition < itemListRef.current?.scrollWidth - itemListRef.current?.clientWidth ? "" : "Collapsed"}`}
        onClick={() => handleScroll("right")}
        style={{ right: "0" }}
      >
        &gt;
      </button>
    </div>
  );
};

export default ScrollableContainer;
