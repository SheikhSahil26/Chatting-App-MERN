import React from 'react'
import GenderComponent from './GenderComponent.jsx'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignUp from '../../hooks/useSignUp.js'

const SignUp = () => {

    const [inputs,setInputs]=useState({
        fullName:'',
        username:'',
        password:'',
        gender:'',

    })

    const {loading,signup}=useSignUp()

    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender}) 
    }

    const handleSubmit=async (e)=>{
        e.preventDefault();
        await signup(inputs)
        
    }


  return (
    
       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp <span className='text-blue-500'></span>
            </h1>

            <form onSubmit={handleSubmit}>

                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Fullname</span>
                    </label>
                    <input type="text" placeholder='fullname' className='w-full input input-bordered h-10'
                        value={inputs.fullName}
                        onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
                    />

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
                    onChange={(e)=> setInputs({...inputs,password:e.target.value})}/>
                </div>

             {/* gender checkbox */}

                <GenderComponent onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

                <Link to={"/login"} className='text-sm hover:underline hover:text-green-600 mt-4 inline-block'>Already have an Account?</Link>

             

             <div>
             <button className="btn btn-info mt-3 w-24 bg-green-400">SignUp</button>
                
             </div>

            </form>


        </div>
      
    </div>

  )
}

export default SignUp
