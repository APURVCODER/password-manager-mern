import React from 'react'

const PassList = () => {
  return (
    <>
    <div className="hidden sm:grid sm:grid-cols-6 mycontainer bg-purple-400 font-bold text-center py-1.5">
        <div className=" col-span-3 ">Site</div>
        <div className=' col-span-1'>Username</div>
        <div className=' col-span-1'>Password</div>
        <div className=' col-span-1'>Actions</div>
       
    </div>
    <div className="flex flex-col text-center mycontainer sm:grid sm:grid-cols-6 p-4 sm:p-2 bg-purple-100 rounded-xl sm:rounded-none border mb-3 sm:mb-0">
  
  <div className="flex justify-between sm:block sm:col-span-3 border-b sm:border-0 pb-1 sm:pb-0">
    <span className="font-bold sm:hidden text-purple-700">Site:</span>
    <span>google.com</span>
  </div>

  <div className="flex justify-between sm:block border-b sm:col-span-1 sm:border-0 py-1 sm:py-0">
    <span className="font-bold sm:hidden text-purple-700">Username:</span>
    <span>sgda</span>
  </div>

  <div className="flex justify-between sm:block border-b sm:col-span-1 sm:border-0 py-1 sm:py-0">
    <span className="font-bold sm:hidden text-purple-700">Password:</span>
    <span>sdg</span>
  </div>

  <div className="flex justify-between sm:block pt-1 sm:pt-0 sm:col-span-1">
    <span className="font-bold sm:hidden text-purple-700">Actions:</span>
    <div>23421</div>
  </div>

</div>

    </>
  )
}

export default PassList