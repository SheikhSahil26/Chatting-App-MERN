import React from 'react'
import { useAuthContext } from '../context/AuthContext.jsx'
import toast from 'react-hot-toast'
const useLogout = () => {
  const {setAuthUser}=useAuthContext()
  const logout=async ()=>{
    try{
        const res=await fetch('https://chatapp-sigma-eight.vercel.app/api/auth/logout',{
            method:'POST',
            headers:{"Content-Type":"application/json"}
        });
        const data=await res.json();

        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem('chat-user')
        setAuthUser(null)

    }
    catch(error)
    {
        toast.error(error.message)
    }
    
  }
  return {logout}
}

export default useLogout
