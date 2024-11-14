import React from 'react'
import useConversation from '../../zustand/useConversation.js'

const Conversation = ({conversation}) => {

    const {selectedConversation,setSelectedConversation}=useConversation()

    const isSelected=selectedConversation?._id=== conversation._id

  return (
    <>
     <div className={` flex  gap-2  items-center hover:bg-green-500 rounded p-2 py-1 cursor-pointer
     ${isSelected?"bg-green-500" : ""}`
     }
        onClick={()=>{setSelectedConversation(conversation)}}
     >
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilePicUrl} alt="" />
            </div>
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-200'>{conversation.username}</p>
                <span className='text-xl'>time</span>
            </div>
        </div>
      
    </div>
    <div className='divider my-0 py-0 h-1'/>
    </>
  )
   
}

export default Conversation
