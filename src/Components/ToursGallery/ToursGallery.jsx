import React from 'react'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import gallery5 from '../../assets/gallery5.jpg'
import gallery6 from '../../assets/gallery6.jpg'
import gallery7 from '../../assets/gallery7.jpg'

const ToursGallery = () => {
    return (
        <div>
            <section className='py-16'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-center text-center">
                        <div className="">
                            <h2 className='py-2 font-poppins font-bold text-5xl text-[#333]'>Best <span className='text-[#199E9D]'>Explore Bangladesh</span></h2>
                            <p className='mx-auto font-poppins font-light text-[#333] text-base py-2 md:w-[63%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum, dolor sit amet consectetur adipisicing elit..</p>
                        </div>
                    </div>
                    <div className="md:flex justify-between mt-10 px-4 md:px-0">
                        <div className="md:w-[64%]">
                            <div className="md:flex justify-between">
                                <div className="md:w-[64%] relative group overflow-hidden rounded-lg">
                                    <img
                                        src={gallery1}
                                        alt="Gallery Image"
                                        className="w-full h-full object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-[18px] md:text-2xl mb-2">Small Group Departures</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                                </div>

                                <div className="md:w-[34%] grid grid-cols-2 md:grid-cols-1 gap-5 mt-5 md:mt-0">
                                    <div className="relative group overflow-hidden rounded-lg">
                                        <img src={gallery3} alt="" className='w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out' />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-[16px] md:text-2xl mb-2">	Affordable Dreams</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                                    </div>
                                    <div className="relative group overflow-hidden rounded-lg">
                                        <img src={gallery6} alt="" className='w-full h-48 md:h-full object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out' />
                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-base md:text-2xl mb-2">
                                        Undiscovered Tours</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-5 mt-5 rounded-lg">
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img src={gallery2} alt="" className='w-full h-48 md:h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out' />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-base md:text-2xl mb-2">
                                        Religious Tours</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group overflow-hidden rounded-lg">
                                    <img src={gallery4} alt="" className='w-full h-48 md:h-80 object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out' />
                                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-base md:text-2xl mb-2">
                                        Solo Travel</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-[34%]">
                            <div className="w-full relative border-2 rounded-lg md:block hidden">
                                <img src={gallery7} alt="" className='w-full h-[413px] object-cover rounded-lg' />
                                <div className="mt-10 absolute inset-0 flex flex-col text-center text-black duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-xl md:text-3xl mb-2 w-[70%] mx-auto">
                                        Let our experts plan your 2024 journey</h2>
                                        <button className="mt-3 text-white py-3 px-6 bg-red-500 font-semibold duration-700 w-40 rounded-lg mx-auto hover:bg-[#17aba9]">
                                        View Journeys
                                        </button>
                                    </div>
                            </div>
                            <div className="mt-5 relative group overflow-hidden rounded-lg">
                                <img src={gallery5} alt="" className='w-full h-full object-cover rounded-lg group-hover:scale-125 transition-transform duration-500 ease-in-out' />
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 rounded-lg group-hover:bg-opacity-30 transition-opacity duration-500 ease-in-out"></div>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white duration-500 ease-in-out">
                                        <h2 className="font-playfair font-bold text-xl md:text-2xl mb-2">
                                        Private Touring</h2>
                                        <button className=" text-white font-semibold hover:border-[#17aba9] border-b-2 duration-700">
                                            View Tours
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ToursGallery