const CRUD = () => {
  return (
    <div className="flex   mx-[10px] mt-[10px] gap-[2px] overflow-x-auto">
      <div className="flex   flex-shrink-0  flex-col items-center w-[210px]">
        <div className="flex flex-row flex-shrink-0 items-center mb-[5px] justify-between w-[130px]">
          <img
            src="icons/delete.png"
            className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200 "
          ></img>
          <img
            src="icons/save.png"
            className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200"
          ></img>
          <img
            src="icons/upload.png"
            className="w-[30px] mt-[1px] hover:outline hover:outline-1 hover:outline-pink-200"
          ></img>
        </div>
        <img
          src="white-skin.png"
          className="w-[200px]  border-[1px] border-pink-200 "
        ></img>
      </div>
    </div>
  );
};

export default CRUD;
