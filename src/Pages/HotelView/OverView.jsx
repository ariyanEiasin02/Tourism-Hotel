import React from 'react'

function OverView() {
  return (
    <section>
        <div className='container px-4 md:px-8 lg:px-10  w-[100%] md:w-[65%] border p-5 rounded-2xl'>
        <h3 className='text-xl font-semibold text-[#21253D] border-b-2 w-28 pb-1 border-[#8B3EEA]'>Overview</h3>
        <p className='text-[#A8A8A8] mt-4 leading-6'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
        <p className='text-[#A8A8A8] mt-4 leading-6'>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.</p>
        <ul className='mt-4 ml-5 '>
            <li className='text-[#A8A8A8] list-disc mb-3'>Buffet breakfast as per the Itinerary</li>
            <li className='text-[#A8A8A8] list-disc mb-3'>Visit eight villages showcasing Polynesian culture</li>
            <li className='text-[#A8A8A8] list-disc mb-3'>All toll tax, parking, fuel, and driver allowances</li>
            <li className='text-[#A8A8A8] list-disc mb-3'>Complimentary Camel safari, Bonfire, and Cultural Dance at Camp</li>
            <li className='text-[#A8A8A8] list-disc mb-3'>Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.

            </li>
        </ul>
        </div>
      
    </section>
  )
}

export default OverView
