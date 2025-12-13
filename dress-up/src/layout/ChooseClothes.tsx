import { useState, useEffect } from "react";
import { useCharacter } from "../contexts/CharacterContext";

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

  const categoryMapping: Record<string, keyof ClothingItem> = {
    eyes: "eyes",
    hairFront: "hairFront",
    hairBack: "hairBack",
    tops: "tops",
    bottoms: "bottoms",
  };

  const handleItemSelect = (item: ClothingItem) => {
    console.log("Selected item:", item);
    console.log("Selected category:", selectedCategory);

    const characterCategory = categoryMapping[selectedCategory];
    console.log("Mapped to character category:", characterCategory);

    if (characterCategory && setItem) {
      setItem(characterCategory, item.real);
      console.log(`Added ${item.real} to ${characterCategory}`);
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

  return (
    <div className="flex flex-1 min-h-0 h- flex-col ">
      <div className="flex flex-row overflow-x-auto sm:justify-center  ">
        {manifest.categories.map((category) => (
          <img
            key={category.id}
            src={category.icon}
            onClick={() => setSelectedCategory(category.id)}
            className={`"w-[60px] hover:border-2 hover:border-pink-100 transition-all duration-300 ${
              selectedCategory === category.id
                ? " border-2 border-pink-100 "
                : ""
            }`}
          ></img>
        ))}
      </div>

      <div className="grid flex-1 bg-pink-300 min-h-0 overflow-auto  ">
        {" "}
        <div className="grid grid-cols-5">
          {items.map((item) => (
            <img
              onClick={() => handleItemSelect(item)}
              src={item.preview}
              className="w-[100px] h-[100px]  "
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
};

export default ChooseClothes;
