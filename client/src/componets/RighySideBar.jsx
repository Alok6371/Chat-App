import React from "react";

const imagesDummyData = [
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470615/pic2_tuokkm.png",
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470614/pic3_x1uzxh.png",
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470614/pic3_x1uzxh.png",
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470616/pic1_imraxp.png",
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470616/pic1_imraxp.png",
  "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470615/pic4_thpaok.png",
];

 const Print=()=>{
    return console.log("Print is Completed")
 }
  
const RightSideBar = ({ selectedUser }) => {
 

  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${
          selectedUser ? "max-md:hidden" : ""
        }`}
      >
        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={
              selectedUser?.profilePic ||
              "https://res.cloudinary.com/dn3kbrwp9/image/upload/avatar_icon_mvclg6.png"
            }
            alt="Profile Pic"
            className="w-20 aspect-square rounded-full"
          />
          <div className="flex items-center gap-2 text-xl font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>{selectedUser?.fullName}</span>
          </div>
          <p className="text-sm text-center px-4">{selectedUser?.bio}</p>
        </div>
        <hr className="border-[#ffffff50] my-4" />
        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid hide-scrollbar grid-cols-2 gap-4 opacity-80">
            {imagesDummyData.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} alt="" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 tet-white border-none text-sm  py-2 px-20 rounded-full cursor-pointer font-semibold "
        >
         {Print}
        </button>
      </div>
    )
  );
};

export default RightSideBar;
