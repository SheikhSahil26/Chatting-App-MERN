import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import { useState } from 'react';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {

  const [search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation
  const {conversations}=useGetConversations()

  const handleSubmit=(e)=>{
      e.preventDefault();
      if(!search) return
      if(search.length<3)  return toast.error("search must be atleast 3 characters")

        const conversation=conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation)
        {
          setSelectedConversation(conversation);
          setSearch("");
        }
        else{
          toast.error("no user found")
        }
      
  }


  return (
    <div>
      <form onSubmit={handleSubmit}className="flex items-center gap-2">
        <input type="text" placeholder='fullname' className='input input-bordered rounded-full' 
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
        />
        <button type='submit' className='btn btn-circle bg-green-600 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
      </form>
    </div>
  )
}

export default SearchInput
