import React from "react";
import { useSwipeable } from "react-swipeable";

function OpenNavMenu({ setIsOpened }) {
  // handle swipe to open navbar
  const swipeHandler = useSwipeable({
    delta: 100,
    onSwipedLeft: () => {
      if (window.innerWidth >= 1024) return;
      setIsOpened(true);
    },
  });

  return <div className="absolute right-0 h-screen w-10 z-50 overflow-hidden" {...swipeHandler} />;
}

export default OpenNavMenu;
