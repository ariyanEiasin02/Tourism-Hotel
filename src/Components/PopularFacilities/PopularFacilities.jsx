import React from 'react'

const PopularFacilities = ({titleName,titleIcon}) => {
    return (
        <>
            <div className="flex items-center">
                <div className="">
                    <i className='text-[#40A167]'>{titleIcon}</i>
                </div>
                <div className="pl-2">
                    <p className='font-playfair font-medium text-base text-[#333]'>{titleName}</p>
                </div>
            </div>
        </>
    )
}

export default PopularFacilities