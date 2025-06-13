import React, { useState } from 'react'
import Sidebar from '../componets/Sidebar'
import ChatContainer from '../componets/ChatContainer'
import RighySideBar from '../componets/RighySideBar'

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%] text-gray-400'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-full grid relative ${
        selectedUser ? 'grid-cols-1 md:grid-cols-[1fr_2fr_1fr]' : 'grid-cols-1 md:grid-cols-[1fr_2fr]'
      }`}>
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        {selectedUser && (
          <RighySideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        )}
      </div>
    </div>
  )
}

export default HomePage
