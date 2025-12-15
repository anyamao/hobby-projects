import { useState, useEffect } from "react";
import { useCharacter } from "../contexts/CharacterContext";
import CRUD from "../hooks/CRUD";
import { useCRUD } from "../contexts/CRUDContext";
import { useTheme } from "../contexts/ThemeContext";

interface Category {
  id: string;
  icon: string;
  items: ClothingItem[];
}

interface ClothingItem {
  id: string;
  preview: string;
  real: string;
}

interface ManifestData {
  categories: Category[];
}

const ChooseClothes = () => {
  const { theme } = useTheme();
  const { isVisible, hideModal } = useCRUD();
  const [manifest, setManifest] = useState<ManifestData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const { setItem, clothing, getLayers } = useCharacter();

  useEffect(() => {
    fetch("/manifest.json")
      .then((res) => res.json())
      .then((data: ManifestData) => {
        setManifest(data);
        if (data.categories.length > 0) {
          setSelectedCategory(data.categories[0].id);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading manifest:", err);
        setIsLoading(false);
      });
  }, []);

  const categoryMapping: Record<
    string,
    keyof ReturnType<typeof useCharacter>["clothing"]
  > = {
    eyes: "eyes",
    hairFront: "hairFront",
    hairBack: "hairBack",
    tops: "tops",
    bottoms: "bottoms",
    coats: "coats",
    socks: "socks",
    boots: "boots",
  };

  const handleItemSelect = (item: ClothingItem) => {
    const characterCategory = categoryMapping[selectedCategory];

    if (characterCategory && setItem) {
      setItem(characterCategory, item.real);
    } else {
      console.warn(`Category ${selectedCategory} not found in mapping`);
    }
    setTimeout(() => {
      console.log("Current clothing state after:", clothing);
      console.log("Current layers:", getLayers());
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        Loading clothing...
      </div>
    );
  }

  if (!manifest) {
    return (
      <div className="flex-1 flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  const currentCategory = manifest.categories.find(
    (c) => c.id === selectedCategory
  );
  const items = currentCategory?.items || [];

  if (!isVisible) {
    return (
      <div className="flex flex-1 min-h-0 h- flex-col ">
        <div className="flex flex-row overflow-x-auto sm:justify-center  ">
          {manifest.categories.map((category) => (
            <img
              key={category.id}
              src={category.icon}
              onClick={() => setSelectedCategory(category.id)}
              className={`"w-[70px] h-[70px] hover:border-2  cursor-pointer${
                theme === "dark"
                  ? "hover:border-forth"
                  : "hover:border-blue-100"
              }transition-all duration-300 ${
                selectedCategory === category.id
                  ? ` border-2 ${
                      theme === "dark" ? "border-forth" : "border-pink-100"
                    } `
                  : ""
              }`}
            ></img>
          ))}
        </div>

        <div
          className={`flex flex-1 min-h-0 overflow-auto ${
            theme === "dark" ? "bg-third" : "bg-pink-300"
          } `}
        >
          {" "}
          <div className="grid grid-cols-6 sm:grid-cols-7 mt-[10px] mx-[10px] my-[10px] gap-col-[5px] ">
            {items.map((item) => (
              <img
                onClick={() => handleItemSelect(item)}
                src={item.preview}
                className="w-[70px] h-[70px] border-[2px] rounded-[5px] border-eight  mr-[5px] cursor-pointer hover:border-ninth"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.png";
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else if (isVisible) {
    return (
      <div
        className={`flex flex-1  flex-col min-h-0 ${
          theme === "dark" ? "bg-third" : "bg-pink-300"
        } `}
      >
        <CRUD></CRUD>
      </div>
    );
  }
};

export default ChooseClothes;
