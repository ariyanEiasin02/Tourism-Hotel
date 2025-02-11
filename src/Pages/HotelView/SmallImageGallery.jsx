import React from 'react'

function SmallImageGallery(props) {
  return (
    <section className='mt-3'>
        <div className='flex items-center gap-3 px-3 mt-8 '>
            <img className='w-12 h-12' src="small-1.png" alt="" />
            <img className='w-12 h-12' src="small-2.png" alt="" />
            <img className='w-12 h-12' src="small-3.png" alt="" />
            <img className='w-12 h-12' src="small-4.png" alt="" />
            <p className='text-[#8B3EEA] font-bold text-xl'>{props.number}</p>
        </div>
    </section>
  )
}

export default SmallImageGallery
