import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext.jsx';
const useLogin = () => {

    const [loading,setLoading]=useState(false);

    const {setAuthUser}=useAuthContext()


    const login=async({username,password})=>{


        setLoading(true)
        try{

            const res=await fetch("https://chatapp-sigma-eight.vercel.app/api/auth/login",{
                method:'POST',
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username,password})   //passing this
            })
            // console.log(res);
            const data=await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem('chat-user',JSON.stringify(data))

            setAuthUser(data);

        }
        catch(error){
            toast.error(error.message);
        }finally{
            setLoading(false)
        }

    }
    return {loading,login};
}

export default useLogin


