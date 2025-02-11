import React from 'react'

function Review() {
  return (
    <section>
    <div className='container px-4 md:px-8 '>
   <div className='px-5 py-5 border-2 rounded-xl'>
   <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA]'>Write your review</h3>
   
   <div className='mt-10'>
 <div className='flex flex-col gap-5 mb-10 md:flex-row'>
 <div className='w-full'>
        <input className='w-full px-5 py-4 rounded-md focus:outline-dotted outline-blue-700' type="text" placeholder='Enter Your Email' />
    </div>
    <div className='w-full'>
        <input className='w-full px-5 py-4 rounded-md focus:outline-dotted outline-blue-700' type="text" placeholder='Enter Your Email' />
    </div>
 </div>

    <textarea className='w-full px-5 py-4 text-gray-500 rounded-md focus:outline-dotted outline-blue-700' name="" id="" cols="30" rows="5" >Write your message </textarea>
    
    <button className='bg-[#8B3EEA] px-10 py-3 text-white font-semibold rounded-md hover:bg-[#2B2540] hover:translate-y-3 transition-all duration-700 ease-linear mx-auto mt-5 block mb-10'>Post Comment</button>
   </div>
   </div>
    </div>
  
</section>
  )
}

export default Review
