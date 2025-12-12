import { useNavigate } from "react-router-dom";

const DressUp = () => {
  return (
    <div className="w-screen h-screen top-0 left-0 flex align-center justify-center">
      <div className=" w-[600px] xl:w-[900px] lg:w-[900px] md:w-[800px] sm:w-[700px] flex flex-col justify-between">
        <div className="bg-purple-100 flex-1 flex flex-row">
          <div className=" flex-1 flex flex-col">
            <div className=" flex">
              {" "}
              <img src="direction.png" className="w-[80px] sm:ml-[30px]"></img>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src="frame1.png "
                className=" ml-[90px] fixed w-[500px] sm:w-[500px] md:w-[600px] lg:w-[600px] xl:w-[600px]"
              ></img>
            </div>
          </div>
          <div className=" flex flex-col justify-between sm:mr-[30px] mb-[30px] ">
            <div className="flex items-center">
              <img
                src="more-icon.png"
                className="w-[70px] hover:scale-110 transition-transform duration:300 cursor:pointer"
              ></img>
            </div>
            <div className="flex flex-col">
              <img
                src="save-icon.png"
                className="w-[70px] hover:scale-110 transition-transform duration:300 cursor:pointer"
              ></img>
              <img
                src="restart-icon.png"
                className="w-[70px] hover:scale-110 transition-transform duration:300 cursor:pointer"
              ></img>
              <img
                src="delete-icon.png"
                className="w-[70px] hover:scale-110 transition-transform duration:300 cursor:pointer"
              ></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="bg-purple-200 mt-[1px] flex flex-row items-center justify-center">
            <img src="eyes-block.png" className="w-[80px]"></img>
            <img src="bang-block.png" className="w-[80px]"></img>
            <img src="behind-hair-block.png" className="w-[80px]"></img>
            <img src="tops-block.png" className="w-[80px]"></img>
            <img src="coat-block.png" className="w-[80px]"></img>
            <img src="bottoms-block.png" className="w-[80px]"></img>
            <img src="socks-block.png" className="w-[80px]"></img>
            <img src="boots-block.png" className="w-[80px]"></img>
            <img src="decorations.png" className="w-[80px]"></img>
          </div>
          <div className="bg-green-900">2</div>
        </div>
      </div>
    </div>
  );
};
export default DressUp;
