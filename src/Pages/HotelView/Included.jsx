import React from 'react'
import SectionPoint from './SectionPoint'

function Included() {
  return (
    <section>
    <div className='container px-4 md:px-8 '>
   <div className='px-5 py-5 border-2 rounded-xl'>
   <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA]'>Included/Excluded</h3>
    <p className='text-[#A8A8A8] mt-4 leading-6'>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
   
   {/* section-point */}
   <SectionPoint/>
   </div>
    </div>
  
</section>
)
  
}

export default Included
