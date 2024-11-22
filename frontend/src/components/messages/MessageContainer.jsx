import React from 'react'
import Messages from './Messages.jsx'
import MessageInput from './MessageInput.jsx'
import useConversation from '../../zustand/useConversation.js'
import { useAuthContext } from '../../context/AuthContext.jsx'
import useGetMessage from '../../hooks/useGetMessage.js'


const MessageContainer = () => {
  const {authUser}=useAuthContext();
  const {selectedConversation}=useConversation();

  // const {message}=useGetMessage();

  // console.log(message);

  
  

  

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {
        !selectedConversation?(<NoChatSelected/>):(
          <>
          {/* Header section*/}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>Chatting with:</span><span className='text-gray-900 font-bold'>{selectedConversation.username}</span>
          </div>

          <Messages/>
          <MessageInput/>

      </>
        
        )
      }
      

    </div>
  )
}

export default MessageContainer


const NoChatSelected=()=>{
  return(
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-bold flex flex-col items-center gap-2'></div>
        <p><b>Welcome User</b> </p>
        <p><b>Select a Chat to get started with chatting.</b></p>
    </div>
  )
}