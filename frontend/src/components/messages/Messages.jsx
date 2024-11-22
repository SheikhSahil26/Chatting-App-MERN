import React from 'react'
import Message from './Message.jsx'
import useGetMessage from '../../hooks/useGetMessage.js';
import {useEffect,useRef} from 'react';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {

  const {messages}=useGetMessage();
  useListenMessages();
  const lastMessageRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
    },100);
  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {messages.length>0 && messages.map((message)=>{
        return   <div key={message._id} ref={lastMessageRef}>
        <Message  message={message}/>
        </div> 
        
      })}
     
      
      {messages.length===0 && (
        <p className='text-center'>Send message to start a conversation</p>
      )}
      

    </div>

  )
}

export default Messages
