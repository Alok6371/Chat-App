import React, { useRef, useEffect } from 'react'
import assets from '../assets/assets'
import { formatDataMessageTime } from '../lib/utils';

const messagesDummyData = [
  {
    "_id": "680f571ff10f3cd28382f094",
    "senderId": "680f5116f10f3cd28382ed02",
    "receiverId": "680f50e4f10f3cd28382ecf9",/////
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "seen": true,
    "createdAt": "2025-04-28T10:23:27.844Z",
  },
  {
    "_id": "680f5726f10f3cd28382f0b1",
    "senderId": "680f50e4f10f3cd28382ecf9",
    "receiverId": "680f5116f10f3cd28382ed02",
    "text": "Line 13.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "seen": true,
    "createdAt": "2025-04-28T10:23:34.520Z",
  },
  {
    "_id": "680f5729f10f3cd28382f0b6",
    "senderId": "680f5116f10f3cd28382ed02",
    "receiverId": "680f50e4f10f3cd28382ecf9",/////////
    "text": "Line 14. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "seen": true,
    "createdAt": "2025-04-28T10:23:37.301Z",
  },
  {
    "_id": "680f572cf10f3cd28382f0bb",
    "senderId": "680f50e4f10f3cd28382ecf9",
    "receiverId": "680f5116f10f3cd28382ed02",
    "text": "Line 15.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "seen": true,
    "createdAt": "2025-04-28T10:23:40.334Z",
  },
  {
    "_id": "680f573cf10f3cd28382f0c0",
    "senderId": "680f50e4f10f3cd28382ecf9",
    "receiverId": "680f5116f10f3cd28382ed02",
    "image": 'https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470614/img1_bdjdul.jpg',
    "seen": true,
    "createdAt": "2025-04-28T10:23:56.265Z",
  },
  {
    "_id": "680f5745f10f3cd28382f0c5",
    "senderId": "680f5116f10f3cd28382ed02",
    "receiverId": "680f50e4f10f3cd28382ecf9",//////////
    "image": 'https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470615/img2_weckpv.jpg',
    "seen": true,
    "createdAt": "2025-04-28T10:24:05.164Z",
  },
  {
    "_id": "680f5748f10f3cd28382f0ca",
    "senderId": "680f5116f10f3cd28382ed02",
    "receiverId": "680f50e4f10f3cd28382ecf9",//////////
    "text": "Line .16 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "seen": true,
    "createdAt": "2025-04-28T10:24:08.523Z",
  }
]


const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  const scrollEnd = useRef(null);

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedUser, messagesDummyData.length]); // scroll on user change or new message

  return selectedUser ? (
    <div>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500 backdrop:blur-lg'>
        {/* header */}
        <img
          src={selectedUser.profilePic || assets.avatarIcon}
          alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
         {selectedUser.fullName }
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>

        <img onClick={() => setSelectedUser(null)} src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470611/arrow_icon_b9y6rq.png" alt="" className='md:hidden max-w-7' />
        <img src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470613/help_icon_xvrojj.png" alt="" className='max-md:hidden max-w-5' />
      </div>


      {/* Chat Area */}
      <div className='flex flex-col h-[calc(100vh-310px)] overflow-y-scroll p-3 pb-6 hide-scrollbar'>
        {
          messagesDummyData.map((msg, index) => (
            <div
              key={index}
              className={`flex items-end gap-2 justify-end ${msg.senderId !== '680f50e4f10f3cd28382ecf9' && 'flex-row-reverse'}`}
            >
              {msg.image ? (
                <img src={msg.image} className='max-w-[190px] border border-gray-700 rounded-lg overflow-hidden mb-8' alt="" />
              ) : (
                <p className={`${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'rounded-br-none' : 'rounded-bl-none'} p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white `}>{msg.text}</p>
              )}
              <div className='text-center text-xs'>
                <img
                  src={msg.senderId === '680f50e4f10f3cd28382ecf9'
                    ? 'https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470612/avatar_icon_mvclg6.png'
                    : 'https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470612/profile_martin_jrxjyz.png'}
                  alt=""
                  className='w-7 rounded-full'
                />
                <p className={`text-gray-500 ${msg.senderId === '680f50e4f10f3cd28382ecf9' ? 'text-right ml-auto' : ''}`}>
                  {formatDataMessageTime(msg.createdAt)}
                </p>
              </div>
            </div>
          ))
        }
        <div ref={scrollEnd}></div>
      </div>
      {/* Bottom Area----------- */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-3 p-3">
        <div className="flex items-center bg-white/10 p-3 rounded-full w-full max-w-lg m-[-1] backdrop-blur-sm font-semibold">
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 text-xs p-2 border-none rounded-full outline-none text-white placeholder-gray-300 bg-transparent"
          />

          {/* Image Upload */}
          <input type="file" id="image" accept="image/png, image/jpeg" hidden />
          <label htmlFor="image">
            <img
              src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470609/gallery_icon_xgy88f.png"
              className="w-5 mr-2 cursor-pointer"
              alt="Upload"
            />
          </label>
        </div>

        {/* Send Button */}
        <img
          src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470610/send_button_wnzsft.png"
          className="w-7 cursor-pointer"
          alt="Send"
        />
      </div>


    </div>
  ) : (
    /////////Staring Part
    <div className='flex flex-col items-center justify-center  gap-2 file-g bg-white/10 max-md:hidden'>
      <img src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470610/logo_icon_m6ziz4.png" alt="" className='max-w-16' />
      <p className='text-lg text-white'> Chat AnyTime ,Any Where</p>
    </div>
  )
}

export default ChatContainer
