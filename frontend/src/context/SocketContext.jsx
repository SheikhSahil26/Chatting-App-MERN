import { createContext, useEffect, useState,useContext } from "react";
import { useAuthContext } from "./AuthContext.jsx";
import io from 'socket.io-client'

const SocketContext=createContext()

export const useSocketContext=()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider=({children})=>{

    const [socket,setSocket]=useState(null)
    const [onlineUsers,setOnlineUsers]=useState([]);
    const {authUser}=useAuthContext()

    useEffect(()=>{
        if(authUser){
            const socket=io("chatapp-sigma-eight.vercel.app",{
                query:{
                    userId:authUser._id
                },
                transports: ["websocket", "polling"], // Ensure supported transports are specified
              });

            socket.on("connect_error", (err) => {
                console.log("Socket connection error:", err);
            });



            setSocket(socket);

            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users);
            })

            return ()=>socket.close()
        }
        else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])


    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}