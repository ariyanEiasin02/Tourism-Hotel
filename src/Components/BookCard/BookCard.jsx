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

const BookCard = () => {
  const images = [
    { id: 1, src: "./src/assets/popular1.jpg", title: "Image 1" },
    { id: 2, src: "./src/assets/popular2.jpg", title: "Image 2" },
    { id: 3, src: "./src/assets/popular3.jpg", title: "Image 3" },
    { id: 4, src: "./src/assets/popular4.jpg", title: "Image 4" },
    { id: 5, src: "./src/assets/popular5.jpg", title: "Image 5" },
    { id: 6, src: "./src/assets/popular6.jpg", title: "Image 6" },
  ];

  return (
    <div>
      <section className='py-8'>
        <div className="max-w-container mx-auto">
          <div className="flex h-96">
            <div className="w-[25%]">
            <div className="w-full h-96 bg-cover bg-center animate-backgroundImages"></div>
            </div>
            <div className="w-[24%]">
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
              style={{ width: "100%"}}
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
            <div className="w-[26%]">
              <div className="bg-[#f0f0f0] w-full h-96"></div>
            </div>
          </div>

         
        </div>
      </section>
    </div>
  )
}

export default BookCard