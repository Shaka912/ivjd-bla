import { IPosition } from "@/interfaces/gloabal.type";
import { useState, useEffect } from "react";

const cursorSize = 8;

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<IPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.clientX - cursorSize / 2,
        y: ev.clientY - cursorSize / 2,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
