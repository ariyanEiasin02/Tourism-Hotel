import React, { useEffect, useRef, useState } from 'react'
// src/components/ImageGallery.js
import LightGallery from "lightgallery/react";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Import LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import img1 from '../../assets/popular1.jpg'
import img2 from '../../assets/popular2.jpg'
import img3 from '../../assets/popular3.jpg'
import img4 from '../../assets/popular4.jpg'
import img5 from '../../assets/popular5.jpg'
import img6 from '../../assets/popular6.jpg'
import { IoLocation } from 'react-icons/io5';
const BookCard = () => {
  const images = [
    { id: 1, src: img1, title: "Image 1" },
    { id: 2, src: img2, title: "Image 2" },
    { id: 3, src: img3, title: "Image 3" },
    { id: 4, src: img4, title: "Image 4" },
    { id: 5, src: img5, title: "Image 5" },
    { id: 6, src: img6, title: "Image 6" },
  ];

  const imaggeAnimation = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const element = document.getElementById('animated-background');
    let index = 0;

    const interval = setInterval(() => {
      element.style.backgroundImage = `url(${imaggeAnimation[index]})`;
      index = (index + 1) % imaggeAnimation.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const galleryRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (galleryRef.current) {
        const galleryInstance = galleryRef.current.instance;
        galleryInstance.goToNextSlide();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <section className='py-5'>
        <div className="max-w-container mx-auto">
          <div className="pb-5">
            <h2 className='font-playfair font-bold text-2xl text-[#333]'>Domki Wierszyki Shelters</h2>
            <div className="flex items-start py-2">
              <div className="">
                <i className='text-2xl text-[#006CE4]'><IoLocation /></i>
              </div>
              <div className="pl-1">
                <p className='font-playfair font-medium text-base text-[#333]'>Droga do Wantuli 10, 34-500 Zakopane, Poland
                  <span className='text-[#006CE4] font-semibold'>–Excellent location - show map</span></p>
              </div>
            </div>
          </div>
          <div className="flex h-96">
            <div className="w-[25%]">
              <div
                id="animated-background"
                className="w-full h-96 animate-backgroundImages bg-cover bg-center"
              />
            </div>
            <div className="w-[25%]">
              <div className="w-full h-full overflow-hidden">
                <LightGallery
                  onInit={(detail) => (galleryRef.current = detail)}
                  plugins={[lgThumbnail, lgZoom]}
                  speed={500}
                >
                  {images.map((image) => (
                    <a
                      key={image.id}
                      href={image.src}
                      className="block w-full transition-transform duration-300 hover:scale-105"
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="shadow-md w-full object-cover"
                      />
                    </a>
                  ))}
                </LightGallery>
              </div>
            </div>
            <div className="w-[25%]">
              <div className="relative w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.067940183906!2d90.3494703113122!3d23.76459789692691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c09f9ba3d447%3A0x1babce9f1c6c95a3!2sMohammadpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1730343622271!5m2!1sen!2sbd"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
              </div>

            </div>
            <div className="w-[25%]">
              <div className="bg-white shadow-lg w-full h-96 px-6 overflow-y-auto">
                <h3 className="font-playfair font-bold text-2xl text-gray-800 mb-4 border-b pb-2">
                  Checking Details
                </h3>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Check-In:</span>
                    <span className="text-gray-900 font-semibold">From 16:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Check-Out:</span>
                    <span className="text-gray-900 font-semibold">Until 12:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium"># of Rooms:</span>
                    <span className="text-gray-900 font-semibold">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium"># of Nights:</span>
                    <span className="text-gray-900 font-semibold">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Total Amount:</span>
                    <span className="text-green-600 font-semibold">$450</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">Meal Plan:</span>
                    <span className="text-gray-900 font-semibold">Breakfast</span>
                  </div>
                </div>

                {/* Hotel Conditions */}
                <h3 className="font-playfair font-bold text-2xl text-gray-800 mt-6 mb-4 border-b pb-2">
                  Hotel Conditions
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Check-in: From 16:00</li>
                  <li>Check-out: Until 12:00</li>
                  <li>Pets are not allowed</li>
                  <li>Free cancellation before 48 hours</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default BookCard