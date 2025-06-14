import { useNavigate } from "react-router-dom";

// Use direct URLs for profile images
const userDummyData = [
  {
    "_id": "680f50aaf10f3cd28382ecf2",
    "email": "test1@greatstack.dev",
    "fullName": "Alison Martin",
    "profilePic": "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470611/profile_alison_aqospo.jpg",
    "bio": "Hi Everyone, I am Using QuickChat",
  },
  {
    "_id": "680f50e4f10f3cd28382ecf9",
    "email": "test2@greatstack.dev",
    "fullName": "Martin Johnson",
    "profilePic": "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470612/profile_martin_jrxjyz.png",
    "bio": "Hi Everyone, I am Using QuickChat",
  },
  {
    "_id": "680f510af10f3cd28382ed01",
    "email": "test3@greatstack.dev",
    "fullName": "Enrique Martinez",
    "profilePic": "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470611/profile_enrique_txjckb.png",
    "bio": "Hi Everyone, I am Using QuickChat",
  },
  {
    "_id": "680f5137f10f3cd28382ed10",
    "email": "test4@greatstack.dev",
    "fullName": "Marco Jones",
    "profilePic": "https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470611/profile_marco_jknjvn.png",
    "bio": "Hi Everyone, I am Using QuickChat",
  },
  {
    "_id": "680f516cf10f3cd28382ed11",
    "email": "test5@greatstack.dev",
    "fullName": "Richard Smith",
    "profilePic": "https://res.cloudinary.com/dn3kbrwp9/image/upload/profile_richard_at0pia.png",
    "bio": "Hi Everyone, I am Using QuickChat",
  }
];

const Sidebar = ({ slecteUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/10 h-full p-5 rounded-xl text-white ${slecteUser ? "max-md:hidden" : ""}`}
    >
      <div className="pb-5">
        <div className="flex justify-between items-center">
          <img
            src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470615/logo_vitc5k.png"
            alt="logo"
            className="w-40"
          />
          <div className="relative py-2 group">
            <img
              src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470612/menu_icon_cjh49x.png"
              alt="Menu"
              className="max-h-5 cursor-pointer"
            />
            <div className="absolute right-0 w-20 top-8 bg-gray-800 text-white rounded-lg shadow-lg p-4 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              <p  onClick={()=>navigate("/login") }
              className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-3">
        <img
          src="https://res.cloudinary.com/dn3kbrwp9/image/upload/search_icon_pmeuyp.png"
          alt="Search icon"
          className="w-3"
        />
        <input
          type="text"
          className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
          placeholder="Search User..."
        />
      </div>

      {/* User List *************************************************/}
      <div className="flex flex-col">
        {userDummyData.map((user, index) => (
          <div
            onClick={() => setSelectedUser(user)}
            key={user._id}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${slecteUser?._id === user._id ? 'bg-[#282142]/50' : ''}`}
          >
            <img
              src={user.profilePic}
              alt={user.fullName}
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3
                ? <span className='text-green-400 text-xs'>Online</span>
                : <span className="text-neutral-400 text-xs">Offline</span>
              }
            </div>
            {index > 2 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Sidebar;
