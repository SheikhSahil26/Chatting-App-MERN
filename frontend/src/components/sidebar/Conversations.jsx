import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversations.js'

const Conversations = () => {

  const {conversations}=useGetConversations();  

  // console.log(conversations);


  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {conversations.map((conversation)=>(
        <Conversation
          key={conversation._id}       //this is the _id of the users other than the user logged in 
          conversation={conversation}  //this is the details of the user {JSON}
        />
      ))}
      

    </div>
  )
}

export default Conversations
