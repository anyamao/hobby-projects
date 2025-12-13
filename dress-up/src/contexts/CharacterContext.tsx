import React, { createContext, useContext, useState, ReactNode } from "react";

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
  eyes: string;
};

interface CharacterContextType {
  clothing: ClothingItem;
  setItem: (category: keyof ClothingItem, item: string | null) => void;
  resetAll: () => void;
  getLayers: () => Array<{ src: string; alt: string; zIndex: number }>;
}

const CharacterContext = createContext<CharacterContextType | undefined>(
  undefined
);

export const useCharacter = () => {
  const context = useContext(CharacterContext);
  if (!context) {
    throw new Error("useCharacter must be used within CharacterProvider");
  }
  return context;
};

interface CharacterProviderProps {
  children: ReactNode;
}

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
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
    eyes: "eyes/eyes-02-real.png",
  });

  const setItem = (category: keyof ClothingItem, item: string | null) => {
    console.log(`Setting ${category} to:`, item);
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
      eyes: "eyes/eyes-02-real.png",
    });
  };

  const getLayers = () => {
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
      clothing.bottom && {
        src: clothing.bottom,
        alt: "bottom",
        zIndex: 6,
      },
      clothing.boots && {
        src: clothing.boots,
        alt: "boots",
        zIndex: 7,
      },
      clothing.top && {
        src: clothing.top,
        alt: "top",
        zIndex: 8,
      },
      clothing.decorations && {
        src: clothing.decorations,
        alt: "decorations",
        zIndex: 9,
      },
      clothing.coat && {
        src: clothing.coat,
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

    return layerOrder.filter(Boolean);
  };

  return (
    <CharacterContext.Provider
      value={{
        clothing,
        setItem,
        resetAll,
        getLayers,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
