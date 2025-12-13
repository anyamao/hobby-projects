import { useState } from "react";

type ClothingItem = {
  top: string | null;
  bottom: string | null;
  coat: string | null;
  socks: string | null;
  boots: string | null;
  mouth: string;
  brows: string;
  decorations: string | null;
  hairFront: string;
  hairBack: string;
  ears: string;
};

export const useCharacter = () => {
  const [clothing, setClothing] = useState<ClothingItem>({
    top: null,
    bottom: null,
    coat: null,
    socks: null,
    boots: null,
    decorations: null,
    brows: "brows-1.png",
    mouth: "mouth-1.png",
    hairFront: "hair-front/hair-front-2.png",
    hairBack: "hair-back/hair-back-2.png",
    ears: "ears.png",
  });

  const setItem = (categury: keyof ClothingItem, item: string | null) => {
    setClothing((prev) => ({
      ...prev,
      [category]: item,
    }));
  };

  const resetAll = () => {
    setClothing({
      top: null,
      bottom: null,
      coat: null,
      socks: null,
      boots: null,
      decorations: null,
      brows: "brows-1.png",
      mouth: "mouth-1.png",
      hairFront: "../hair-front/hair-front-1.png",
      hairBack: "hair-back/hair-back-1.png",
      ears: "ears.png",
    });
  };

  const RemoveCurrent = () => {
    /*make a function to delete the current el*/
  };

  const getLayers = () => {
    const skin = "white-skin.png";
    const eyes = "eyes/eyes-purple.png";
    const underwear = "underwear.png";
    const ears = "ears.png";

    const layerOrder = [
      clothing.hairBack && {
        src: clothing.hairBack,
        alt: "hairBack",
        zIndex: 1,
      },
      { src: skin, alt: "skin", zIndex: 2 },
      { src: underwear, alt: "underwear", zIndex: 3 },
      clothing.mouth && { src: clothing.mouth, alt: "mouth", zIndex: 4 },

      clothing.socks && { src: clothing.socks, alt: "socks", zIndex: 5 },
      clothing.bottom && { src: clothing.bottom, alt: "bottom", zIndex: 6 },
      clothing.boots && { src: clothing.boots, alt: "boots", zIndex: 7 },
      clothing.top && { src: clothing.top, alt: "top", zIndex: 8 },
      clothing.decorations && {
        src: clothing.decorations,
        alt: "decorations",
        zIndex: 9,
      },
      clothing.coat && { src: clothing.coat, alt: "coat", zIndex: 10 },
      clothing.hairFront && {
        src: clothing.hairFront,
        alt: "hairFront",
        zIndex: 11,
      },
      { src: eyes, alt: "eyes", zIndex: 12 },
      clothing.brows && { src: clothing.brows, alt: "brows", zIndex: 13 },
      { src: ears, alt: "ears", zIndex: 13 },
    ];
    return layerOrder.filter(Boolean);
  };

  return {
    clothing,
    setItem,
    resetAll,
    getLayers,
  };
};
