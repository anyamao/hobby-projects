import { useState, useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";

interface Category {
  id: string;
  icon: string;
  items: string[];
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
  const { clothing, setItem, resetAll, getLayers } = useCharacter();
  const [manifest, setManifest] = useState<ManifestData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

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

  const handleItemSelect = (item: ClothingItem) => {
    if (setItem) {
      setItem(selectedCategory as any, item.real);
    }

    console.log(`Selected ${selectedCategory}:`, item);
  };

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
