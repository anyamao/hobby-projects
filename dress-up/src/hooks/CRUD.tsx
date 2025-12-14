import { useCRUD } from "../contexts/CRUDContext";
import { useCharacter } from "../contexts/CharacterContext";

const CRUD = () => {
  const {
    hideCRUD,
    savedOutfits,
    saveCurrentOutfit,
    deleteOutfit,
    loadOutfit,
  } = useCRUD();
  const { getCurrentOutfit } = useCharacter();

  const handleSaveCurrent = () => {
    const name = prompt(` ${savedOutfits.length + 1}`);
    if (name !== null) {
      saveCurrentOutfit(name);
    }
  };

  const handleLoadOutfit = (outfit: any) => {
    loadOutfit(outfit);
  };
  const handleDeleteOutfit = (id: string) => {
    deleteOutfit(id);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <img
          src="icons/exit.png"
          className="w-[20px] fixed mt-[5px] ml-[10px] hover:border-[1px] hover:border-pink-200 "
          onClick={hideCRUD}
        ></img>
        <p
          onClick={handleSaveCurrent}
          className="text-white ml-[50px]  mt-[3px] text-[17px] hover:underline"
        >
          Save new
        </p>
      </div>
      <div className="flex flex-row  mx-[10px] mt-[10px]   overflow-x-auto">
        {savedOutfits.map((outfit) => (
          <div key={outfit.id} className="flex flex-col ">
            <div className="flex   flex-shrink-0  flex-col items-center w-[210px]">
              <div className="flex flex-row flex-shrink-0 items-center mb-[5px] justify-between w-[130px]">
                <img
                  src="icons/delete.png"
                  onClick={() => handleDeleteOutfit(outfit.id)}
                  className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200 "
                ></img>
                <img
                  src="icons/save.png"
                  onClick={handleSaveCurrent}
                  className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200"
                ></img>
                <img
                  src="icons/upload.png"
                  onClick={() => handleLoadOutfit(outfit)}
                  className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200"
                ></img>
              </div>
              <div>
                {outfit.preview ? (
                  <img
                    src={outfit.preview}
                    alt=""
                    className="w-[180px] h-[180px] object-contain border border-pink-100 rounded"
                  />
                ) : (
                  "no stuff"
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CRUD;
