import { useEffect, useState } from "react";

const useIsTouchScreen = () => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const hasTouch = !!("ontouchstart" in window || navigator.maxTouchPoints);
    setIsTouch(hasTouch);
  }, []);

  return isTouch;
};

export default useIsTouchScreen;
