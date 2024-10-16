import React from 'react'

function login() {
  return (
    <div className='bg-white w-[400px] h-full rounded space-y-10 p-4 flex flex-col items-center justify-center'>
        <div className="font-bold text-2xl mt-4">
          <span> Welcome Back !</span>
        </div>
        <div className="w-full p-2">
            <form className='flex flex-col space-y-6'>
                <div className="flex flex-col space-y-3">
                    <span className='text-sm font-bold'>Email:</span>
                    <input className='bg-neutral-100 p-2 rounded placeholder:text-sm outline-none' type="text" placeholder='Enter your email' />
                </div>
                <div className="flex flex-col space-y-3">
                    <span className='text-sm font-bold'>Password:</span>
                    <input className='bg-neutral-100 p-2 rounded placeholder:text-sm outline-none' type="text" placeholder='Enter your password' />
                </div>
                <button className='w-full  bg-[#F9627D] h-10 rounded text-white text-sm font-bold'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default login