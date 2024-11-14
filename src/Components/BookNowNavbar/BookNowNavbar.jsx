import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const BookNowNavbar = () => {
  return (
    <div className='pt-8 pb-2'>
        <div className="max-w-container mx-auto">
        <nav>
            <ul className='flex'>
                <li>
                    <a className='font-playfair font-semibold text-sm text-[#5A6CE4] duration-300 tracking-[0.1rem] hover:underline' href="#">Home <span className='px-2'><IoIosArrowForward className='inline-block text-xl text-[#000]'/>
                    </span></a>
                </li>
                <li>
                    <a className='font-playfair font-semibold text-sm text-[#5A6CE4] duration-300 tracking-[0.1rem] hover:underline' href="#">Hotels<span className='px-2'><IoIosArrowForward className='inline-block text-xl text-[#000]'/>
                    </span></a>
                </li>
                <li>
                    <a className='font-playfair font-semibold text-sm text-[#5A6CE4] duration-300 tracking-[0.1rem] hover:underline' href="#">Poland<span className='px-2'><IoIosArrowForward className='inline-block text-xl text-[#000]'/>
                    </span></a>
                </li>
                <li>
                    <a className='font-playfair font-semibold text-sm text-[#5A6CE4] duration-300 tracking-[0.1rem] hover:underline' href="#">Lesser Poland<span className='px-2'><IoIosArrowForward className='inline-block text-xl text-[#000]'/>
                    </span></a>
                </li>
                <li>
                    <a className='font-playfair font-semibold text-sm text-[#5A6CE4] duration-300 tracking-[0.1rem] hover:underline' href="#">Zakopane<span className='px-2'><IoIosArrowForward className='inline-block text-xl text-[#000]'/>
                    </span></a>
                </li>
                <li>
                    <a className='font-playfair font-medium text-sm text-[#333] duration-300 tracking-[0.1rem]'>Domki Wierszyki Shelters (Chalet), Zakopane (Poland) deals</a>
                </li>
            </ul>
        </nav>
        </div>
    </div>
  )
}

export default BookNowNavbar