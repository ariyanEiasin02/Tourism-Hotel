import React from 'react'
import SectionPoint from './SectionPoint'

function PriceCard() {
  return (
    <section className='py-20'>
    <div className='container px-4 md:px-8 '>
  <div className='px-5 py-5 border-2 rounded-xl'>
  <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA]'>Price</h3>
  <div className='flex items-center gap-3 mt-3'>
  <p className='text-sm font-semibold line-through '>$ 35,500 </p>
  <span className='text-xl font-semibold text-[#8B3EEA]'>$ 30,500 <span className='text-[#A8A8A8] text-sm'>/Per serson</span></span>

  </div>
  <h3 className='text-lg font-semibold text-[#21253D] border-b-2 w-fit pb-1 border-[#8B3EEA] mt-5'>Hotel facilities</h3>

{/* section-point */}
    <SectionPoint/>
  </div>
    </div>
  
</section>
  )
}

export default PriceCard
