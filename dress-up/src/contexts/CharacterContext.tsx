import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type ClothingItem = {
  tops: string | null;
  bottoms: string | null;
  coats: string | null;
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
  clearStorage: () => void;
  getCurrentOutfit: () => ClothingItem;
  removeLastItem: () => void;
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

const STORAGE_KEY = "character-outfit";

const defaultClothing: ClothingItem = {
  tops: null,
  bottoms: null,
  coats: null,
  socks: null,
  boots: null,
  decorations: null,
  brows: "brows-1.png",
  mouth: "mouth-1.png",
  hairFront: "hair-front/hair-front-01-real.png",
  hairBack: "hair-back/hair-back-01-real.png",
  ears: "ears.png",
  eyes: "eyes/eyes-01-real.png",
};

const getDefaultValue = (category: keyof ClothingItem): string | null => {
  const defaults: ClothingItem = {
    tops: null,
    bottoms: null,
    coats: null,
    socks: null,
    boots: null,
    decorations: null,
    brows: "brows-1.png",
    mouth: "mouth-1.png",
    hairFront: "hair-front/hair-front-01-real.png",
    hairBack: "hair-back/hair-back-01-real.png",
    ears: "ears.png",
    eyes: "eyes/eyes-01-real.png",
  };

  return defaults[category];
};

export const CharacterProvider = ({ children }: CharacterProviderProps) => {
  const [lastChangedCategory, setLastChangedCategory] = useState<
    keyof ClothingItem | null
  >(null);
  const getCurrentOutfit = () => clothing;
  const [clothing, setClothing] = useState<ClothingItem>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultClothing, ...parsed };
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error);
    }
    return defaultClothing;
  });

  const saveToStorage = (data: ClothingItem) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  useEffect(() => {
    saveToStorage(clothing);
  }, [clothing]);

  const setItem = (category: keyof ClothingItem, item: string | null) => {
    setLastChangedCategory(category);
    setClothing((prev) => ({
      ...prev,
      [category]: item,
    }));
  };

  const removeLastItem = () => {
    if (!lastChangedCategory) {
      return;
    }

    const categoryNameMap: Record<keyof ClothingItem, string> = {
      tops: "верх",
      bottoms: "низ",
      coats: "пальто",
      socks: "носки",
      boots: "обувь",
      decorations: "украшение",
      brows: "брови",
      mouth: "рот",
      hairFront: "передние волосы",
      hairBack: "задние волосы",
      ears: "уши",
      eyes: "глаза",
    };

    const defaultValue = getDefaultValue(lastChangedCategory);

    setClothing((prev) => ({
      ...prev,
      [lastChangedCategory]: defaultValue,
    }));

    setLastChangedCategory(null);
  };

  const resetAll = () => {
    setClothing(defaultClothing);
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

    return layerOrder.filter(Boolean);
  };

  return (
    <CharacterContext.Provider
      value={{
        clothing,
        setItem,
        resetAll,
        getLayers,
        getCurrentOutfit,
        removeLastItem,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterProvider;
