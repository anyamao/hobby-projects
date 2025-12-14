import { useState } from "react";

interface Layer {
  src: string;
  alt: string;
  zIndex: number;
}

interface CharacterDisplayProps {
  layers: Layer[];
}

const CharacterDisplay = ({ layers }: CharacterDisplayProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouthLayer = layers.find((layer) => layer.name === "mouth");
  return (
    <div
      className="fixed w-[500px] h-[500px] top-[150px] sm:mr-[100px]   "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {layers.map((layer, index) => {
        const isMouth =
          layer.alt.toLowerCase().includes("mouth") ||
          layer.src.toLowerCase().includes("mouth") ||
          (layer as any).name === "mouth";

        const src = isMouth
          ? isHovered
            ? "laugh.png"
            : "mouth-1.png"
          : layer.src;

        return (
          <img
            key={index}
            src={src}
            alt={layer.alt}
            className="absolute top-[-30px] left-0  w-full h-full object-contain"
            style={{ zIndex: layer.zIndex }}
          />
        );
      })}
    </div>
  );
};

export default CharacterDisplay;
