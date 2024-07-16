import Image from "next/image";
import { FC, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { IImage, IPosition } from "@/gloabal.type";

interface IListViewHoverImagesProps {
  currentImg: IImage;
  mousePosition: IPosition;
}
const MotionBox = motion(motion.div);
const ListViewHoverImages: FC<IListViewHoverImagesProps> = ({
  currentImg,
  mousePosition,
}) => {
  const x = useMotionValue(mousePosition.x + 20);
  const y = useMotionValue(mousePosition.y + 20);

  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });

  useEffect(() => {
    x.set(mousePosition.x + 20);
    y.set(mousePosition.y + 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mousePosition]);

  return (
    <MotionBox
      exit={{ opacity: 0, transition: { duration: 1 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      style={{
        position: "fixed",
        top: springY,
        left: springX,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      <Image
        src={currentImg.src}
        alt={currentImg.alt}
        width={280}
        height={280}
      />
    </MotionBox>
  );
};

export default ListViewHoverImages;
