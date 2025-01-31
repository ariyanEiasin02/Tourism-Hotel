import React from 'react'
import Section1Image from './Picture/offer1.png'


const TourDetailsSection1 = () => {
  return (
    <section>
        <div className='container'>
            <div>
                <img className=' absolute w-full h-full object-cover' src={Section1Image} alt="" />
            </div>

        </div>
    </section>
  )
}

export default TourDetailsSection1;
