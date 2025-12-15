import { useCRUD } from "../contexts/CRUDContext";
import { useCharacter } from "../contexts/CharacterContext";
import OutfitPreview from "../layout/OutfitPreview";
import { useTheme } from "../contexts/ThemeContext";

const CRUD = () => {
  const { theme } = useTheme();
  const {
    hideCRUD,
    savedOutfits,
    saveCurrentOutfit,
    updateOutfit,
    deleteOutfit,
    loadOutfit,
  } = useCRUD();
  const { getCurrentOutfit } = useCharacter();

  const handleSaveCurrent = () => {
    const name = `${savedOutfits.length + 1}`;
    saveCurrentOutfit(name);
  };

  const handleLoadOutfit = (outfit: any) => {
    loadOutfit(outfit);
  };
  const handleDeleteOutfit = (id: string) => {
    deleteOutfit(id);
  };
  const handleUpdateOutfit = (outfitId: string) => {
    const currentClothing = getCurrentOutfit();
    updateOutfit(outfitId, currentClothing);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <img
          src={` ${
            theme === "dark" ? "icons/exit-dark.png" : "icons/exit.png"
          }`}
          className={`w-[20px] fixed mt-[5px] ml-[10px] hover:border-[1px] ${
            theme === "dark" ? "hover:border-sixth" : "hover:border-pink-200"
          }`}
          onClick={hideCRUD}
        ></img>
        <p
          onClick={handleSaveCurrent}
          className={` ${
            theme === "dark" ? "text-fifth" : "text-white"
          } ml-[50px]  mt-[3px] text-[17px] hover:underline`}
        >
          Save new
        </p>
      </div>
      <div className="flex flex-row  mx-[10px] mt-[10px]   overflow-x-auto">
        {savedOutfits.map((outfit) => (
          <div key={outfit.id} className="flex flex-col ">
            <div className="flex   flex-shrink-0  flex-col items-center w-[160px]">
              <div className="flex flex-row flex-shrink-0 items-center mb-[5px] justify-between w-[130px]">
                <img
                  src={` ${
                    theme === "dark"
                      ? "icons/delete-dark.png"
                      : "icons/delete.png"
                  }`}
                  onClick={() => handleDeleteOutfit(outfit.id)}
                  className={`w-[30px] mt-[1px] hover:outline hover:outline-1 ${
                    theme === "dark"
                      ? "hover:outline-sixth"
                      : "hover:outline-pink-200"
                  }`}
                ></img>
                <img
                  src={` ${
                    theme === "dark" ? "icons/save-dark.png" : "icons/save.png"
                  }`}
                  onClick={() => handleUpdateOutfit(outfit.id)}
                  className={`w-[30px] mt-[1px] hover:outline hover:outline-1 ${
                    theme === "dark"
                      ? "hover:outline-sixth"
                      : "hover:outline-pink-200"
                  }`}
                ></img>
                <img
                  src={` ${
                    theme === "dark"
                      ? "icons/upload-dark.png"
                      : "icons/upload.png"
                  }`}
                  onClick={() => handleLoadOutfit(outfit)}
                  className={`w-[30px] mt-[1px] hover:outline hover:outline-1 ${
                    theme === "dark"
                      ? "hover:outline-sixth"
                      : "hover:outline-pink-200"
                  }`}
                ></img>
              </div>
              <div>
                <OutfitPreview clothing={outfit.clothing} size="small" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRUD;
