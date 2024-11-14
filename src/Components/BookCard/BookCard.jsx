import React, { useEffect, useState } from 'react'
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
  return (
    <div>
      <section className='py-8'>
        <div className="max-w-container mx-auto">
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
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  elementClassNames="custom-gallery"
                >
                  {images.map((image) => (
                    <a key={image.id} href={image.src} data-lg-size="1406-1390">
                      <img
                        className="img-thumbnail"
                        src={image.src}
                        alt={image.title}
                        style={{ width: "100%" }}
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
              <div className="bg-[#f0f0f0] w-full h-96 p-4">
                <h3 className='font-playfair font-bold text-xl text-[#333]'>Checking Details:</h3>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>Check In:</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>Check Out:</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>#Of Room:</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>#Of Nights:</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>#Total Amount:</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>Meal Plan:</p>
                <h3 className='font-playfair font-bold text-xl text-[#333] py-2'>Hotel Conditions:</h3>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>Check-in:From 16:00</p>
                <p className='font-playfair font-medium text-base text-[#333] py-1'>Check-out:Untill 12:00</p>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default BookCard