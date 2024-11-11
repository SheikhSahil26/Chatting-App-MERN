import React from 'react'
import GenderComponent from './GenderComponent'
const SignUp = () => {
  return (
    
       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-300'>
                SignUp <span className='text-blue-500'></span>
            </h1>

            <form>

                <div>
                <label className='label p-2'>
                        <span className='text-base label-text'>Fullname</span>
                    </label>
                    <input type="text" placeholder='fullname' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='username' className='w-full input input-bordered h-10' />

                    <label className='label p-2'>
                        <span className='text-base label-text'>password</span>
                    </label>
                    <input type="text" placeholder='password' className='w-full input input-bordered h-10' />
                </div>

             {/* gender checkbox */}

                <GenderComponent/>


             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block'>Alreadt have an account?</a>

             <div>
             <button className="btn btn-info mt-3 w-24">SignUp</button>
                
             </div>

            </form>


        </div>
      
    </div>

  )
}

export default SignUp
