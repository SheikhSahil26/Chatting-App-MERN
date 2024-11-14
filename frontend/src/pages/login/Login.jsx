import React from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';
import { useState } from 'react';

const Login = () => {

    const {loading,login}=useLogin();
    const [inputs,setInputs]=useState({
        username:'',
        password:'',
    })

    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        await login(inputs);
    }



  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                Login <span className='text-blue-500'></span>
            </h1>

            <form onSubmit={handleSubmit}>

                <div>

                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='username' className='w-full input input-bordered h-10'
                         value={inputs.username}
                         onChange={(e)=> setInputs({...inputs,username:e.target.value})}
                    />

                    <label className='label p-2'>
                        <span className='text-base label-text'>password</span>
                    </label>
                    <input type="text" placeholder='password' className='w-full input input-bordered h-10'
                         value={inputs.password}
                         onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                    />
                </div>

             

                <Link to={"/signup"} className='text-sm hover:underline hover:text-green-600 mt-4 inline-block'>Dont have an Account?</Link>




             <div>
             <button className="btn btn-info mt-3 w-24 bg-green-400">Login</button>
                
             </div>

            </form>


        </div>
      
    </div>
  )
}

export default Login
