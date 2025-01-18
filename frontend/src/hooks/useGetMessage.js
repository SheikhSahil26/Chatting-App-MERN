import React from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext.jsx';
import {useState,useEffect} from 'react'
import useConversation from '../zustand/useConversation.js';



const useGetMessage = () => {

    const {messages,setMessages,selectedConversation}=useConversation();
    const {authUser}=useAuthContext();

    useEffect(()=>{
      const getMessages = async ()=>{
        try{
            const res=await fetch(`https://chatapp-sigma-eight.vercel.app/api/message/getmessages/${selectedConversation._id}`)
            const data=await res.json()

          if(data.error) throw new Error(data.error)
            
           setMessages(data);
            // console.log(data)
            
          //  console.log(messages.message);
          
    
        }
        catch(error){
            toast.error(error.message)
        }
      }

      if(selectedConversation?._id) getMessages();

    },[selectedConversation._id,setMessages])

  //   useEffect(() => {
  //     console.log("Updated messages in state:", messages); // Log after state update
  // }, [messages]);

    return {messages}

}

export default useGetMessage
