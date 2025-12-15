import React, { createContext, useContext, useState, ReactNode } from "react";

interface CRUDContext {
  isVisible: boolean;
  showCRUD: () => void;
  hideCRUD: () => void;
}

interface SavedOutfit {
  id: string;
  clothing: any;
  preview: string;
}

interface CRUDContextType {
  isVisible: boolean;
  savedOutfits: SavedOutfit[];
  showCRUD: () => void;
  hideCRUD: () => void;
  saveCurrentOutfit: (name?: string) => void;
  deleteOutfit: (id: string) => void;
  loadOutfit: (outfit: SavedOutfit) => void;
  updateOutfit: (id: string, newClothing: any) => void;
}

const CRUDContext = createContext<CRUDContextType | undefined>(undefined);

export const useCRUD = () => {
  const context = useContext(CRUDContext);
  if (!context) {
    throw new Error("CCRUDContext error");
  }
  return context;
};

export const CRUDProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const [savedOutfits, setSavedOutfits] = useState<SavedOutfit[]>(() => {
    try {
      const saved = localStorage.getItem("saved-outfits");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const showCRUD = () => {
    console.log("Showing CRUD");
    setIsVisible(true);
  };

  const hideCRUD = () => {
    console.log("Hiding CRUD");
    setIsVisible(false);
  };

  const saveCurrentOutfit = (name?: string) => {
    console.log("Saving current outfit...");
    const currentOutfit = localStorage.getItem("character-outfit");

    if (!currentOutfit) {
      console.error("No current outfit found in localStorage");

      return;
    }

    try {
      const outfitData = JSON.parse(currentOutfit);
      const newOutfit: SavedOutfit = {
        id: Date.now().toString(),
        name: name || `Наряд ${savedOutfits.length + 1}`,
        clothing: outfitData,
        preview: "",
      };

      const updatedOutfits = [...savedOutfits, newOutfit];
      setSavedOutfits(updatedOutfits);
      localStorage.setItem("saved-outfits", JSON.stringify(updatedOutfits));

      console.log("Outfit saved:", newOutfit);

      // Генерируем превью
      generatePreview(newOutfit.id);
    } catch (error) {
      console.error("Error saving outfit:", error);
    }
  };

  const deleteOutfit = (id: string) => {
    console.log("Deleting outfit:", id);
    const updatedOutfits = savedOutfits.filter((outfit) => outfit.id !== id);
    setSavedOutfits(updatedOutfits);
    localStorage.setItem("saved-outfits", JSON.stringify(updatedOutfits));
  };

  const loadOutfit = (outfit: SavedOutfit) => {
    console.log("Loading outfit:", outfit);

    localStorage.setItem("character-outfit", JSON.stringify(outfit.clothing));
    window.location.reload();
  };

  const updateOutfit = (id: string, newClothing: any) => {
    const updatedOutfits = savedOutfits.map((outfit) =>
      outfit.id === id
        ? {
            ...outfit,
            clothing: newClothing,
          }
        : outfit
    );

    setSavedOutfits(updatedOutfits);
    localStorage.setItem("saved-outfits", JSON.stringify(updatedOutfits));
  };

  const generatePreview = (id: string) => {
    setTimeout(() => {
      setSavedOutfits((prev) =>
        prev.map((outfit) =>
          outfit.id === id
            ? { ...outfit, preview: "placeholder-preview.png" }
            : outfit
        )
      );
    }, 500);
  };
  React.useEffect(() => {
    localStorage.setItem("saved-outfits", JSON.stringify(savedOutfits));
  }, [savedOutfits]);

  return (
    <CRUDContext.Provider
      value={{
        isVisible,
        savedOutfits,
        showCRUD,
        hideCRUD,
        saveCurrentOutfit,
        deleteOutfit,
        loadOutfit,
        updateOutfit,
      }}
    >
      {children}
    </CRUDContext.Provider>
  );
};
