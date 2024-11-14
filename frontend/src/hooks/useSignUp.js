import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const useSignUp = () => {

    const [loading,setLoading]=useState(false)
    
    const { setAuthUser }=useAuthContext()

    const signup=async({fullName,username,password,gender})=>{
        const success=handleInputErrors(fullName,username,password,gender)
        if(!success) return;

        setLoading(true)
        try{
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,username,password,gender})
            })
            console.log(res);
            const data=await res.json();
            console.log(data)


            if(data.error){
                throw new Error(data.error)
            }
            
            //local storage 
            localStorage.setItem('chat-user',JSON.stringify(data));
            //context
            setAuthUser(data);


        }
        catch(error){
           toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    return {loading,signup}
}

export default useSignUp


function handleInputErrors(fullName,username,password,gender){
    if(!fullName || !username || !password || !gender){
        toast.error("enter valid details")
        return false
    }
    if(password.length<6){
        toast.error("password must be atleast 6 characters long")
        return false
    }
    return true
}