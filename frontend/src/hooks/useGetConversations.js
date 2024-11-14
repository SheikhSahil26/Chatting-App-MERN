import React, { useEffect,useState } from 'react'
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [conversations,setConversations]=useState([]);

    useEffect(()=>{
        const getConversations=async()=>{
            try{

                const res=await fetch("/api/user");  //just fetching all the users apart from the logged in User 
                const data=await res.json()        //and usko hum conversation bol rhe hai

                if(data.error){
                    throw new Error(data.error);
                }
               
                setConversations(data);

            }
            catch(error)
            {
                toast.error(error.message)
            }
        }
        getConversations();
    },[])

    return {conversations}

}

export default useGetConversations
