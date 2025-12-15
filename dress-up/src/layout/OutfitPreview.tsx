import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

interface Layer {
  src: string;
  alt: string;
  zIndex: number;
}

interface OutfitPreviewProps {
  clothing: any;
  size?: "small" | "medium";
}

const OutfitPreview = ({ clothing, size = "medium" }: OutfitPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const getLayers = (): Layer[] => {
    const skin = "white-skin.png";
    const underwear = "underwear.png";

    const layerOrder = [
      clothing.hairBack && {
        src: clothing.hairBack,
        alt: "hairBack",
        zIndex: 1,
      },
      { src: skin, alt: "skin", zIndex: 2 },
      { src: underwear, alt: "underwear", zIndex: 3 },
      clothing.mouth && {
        src: clothing.mouth,
        alt: "mouth",
        zIndex: 4,
      },
      clothing.socks && {
        src: clothing.socks,
        alt: "socks",
        zIndex: 5,
      },
      clothing.bottoms && {
        src: clothing.bottoms,
        alt: "bottom",
        zIndex: 6,
      },
      clothing.boots && {
        src: clothing.boots,
        alt: "boots",
        zIndex: 7,
      },
      clothing.tops && {
        src: clothing.tops,
        alt: "tops",
        zIndex: 8,
      },
      clothing.decorations && {
        src: clothing.decorations,
        alt: "decorations",
        zIndex: 9,
      },
      clothing.coats && {
        src: clothing.coats,
        alt: "coat",
        zIndex: 10,
      },
      clothing.hairFront && {
        src: clothing.hairFront,
        alt: "hairFront",
        zIndex: 11,
      },
      clothing.eyes && {
        src: clothing.eyes,
        alt: "eyes",
        zIndex: 12,
      },
      clothing.brows && {
        src: clothing.brows,
        alt: "brows",
        zIndex: 13,
      },
      clothing.ears && {
        src: clothing.ears,
        alt: "ears",
        zIndex: 14,
      },
    ];

    return layerOrder.filter(Boolean) as Layer[];
  };
  const layers = getLayers();

  const sizeClasses = {
    small: "w-[150px] h-[150px]",
    medium: "w-[180px] h-[180px]",
  };
  return (
    <div
      className={`relative ${
        sizeClasses[size]
      } border rounded overflow-hidden ${
        theme === "dark" ? "bg-sixth border-forth" : "bg-white border-pink-100 "
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {layers.map((layer, index) => {
        const isMouth =
          layer.alt.toLowerCase().includes("mouth") ||
          layer.src.toLowerCase().includes("mouth");

        const src = isMouth ? (isHovered ? "laugh.png" : layer.src) : layer.src;

        return (
          <img
            key={index}
            src={src}
            alt={layer.alt}
            className="absolute top-0 left-0 w-full h-full object-contain"
            style={{ zIndex: layer.zIndex }}
          />
        );
      })}
    </div>
  );
};

export default OutfitPreview;
