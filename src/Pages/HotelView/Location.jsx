import React from 'react'

function Location() {
  return (
    <section className='mt-5'>
    <div className='container px-4 md:px-8  w-[100%] md:w-[70%] '>
   <div className='px-5 py-5 border-2 rounded-xl'>
   <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mb-5'>Hotel location</h3>
    
      <img className='relative' src="googleMap.png" alt="" />
      <p className='absolute px-2 py-1 ml-10 -mt-32 font-semibold text-red-600 bg-white cursor-pointer lg:-mt-52'><a href="https://www.google.com/maps/@23.7687879,90.3640686,15z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D">view larger map</a></p>
      
    
   </div>
    </div>
  
</section>
  )
}

export default Location
