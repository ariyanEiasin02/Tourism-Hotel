import React, { useState } from "react";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaHeart, FaSignInAlt, FaBook } from "react-icons/fa";
import ReactFlagsSelect from "react-flags-select";

const Header = () => {
  const [selected, setSelected] = useState("");

  return (
    <section className="bg-[#0B3E3F] md:block hidden">
      <div className="max-w-container mx-auto">
        <div className="md:flex justify-between items-center py-2">
          <div className="md:flex px-4 md:px-0">
            <div className="flex items-center md:border-r-[1px] md:pr-4">
              <p>
                <FaPhoneAlt className="text-white text-[12px]" />
              </p>
              <p className="ml-[2px] font-open-sans font-normal text-white text-[12px]">
                +88 01742264413
              </p>
            </div>
            <div className="md:px-4 flex items-center">
              <p>
                <CgMail className="text-white text-[12px]" />
              </p>
              <p className="ml-[2px] font-open-sans font-normal text-white text-[12px]">
                cityhotelsint@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-8">
            <div className="flex items-center">
              <p className="ml-[2px] font-open-sans font-medium text-white text-[12px]">
                Follow Us :
              </p>
              <ul className="flex">
                <li className="px-4 border-r-[1px]">
                  <a className="text-white text-[12px]" href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="px-4 border-r-[1px]">
                  <a className="text-white text-[12px]" href="#">
                    <FaXTwitter />
                  </a>
                </li>
                <li className="px-4 border-r-[1px]">
                  <a className="text-white text-[12px]" href="#">
                    <FaInstagram />
                  </a>
                </li>
                <li className="pl-4">
                  <a className="text-white text-[12px]" href="#">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </div>
          
            <div className="flex items-center">
              <FaHeart className="text-white text-[12px] mr-2" />
              <a
                href="#"
                className="font-open-sans font-medium text-white text-[12px] hover:underline"
              >
                Wishlist
              </a>
            </div>

            <div className="flex items-center">
              <FaBook className="text-white text-[12px] mr-2" />
              <a
                href="#"
                className="font-open-sans font-medium text-white text-[12px] hover:underline"
              >
                Book Now
              </a>
            </div>
             <div className="flex items-center">
              <FaSignInAlt className="text-white text-[12px] mr-2" />
              <a
                href="#"
                className="font-open-sans font-medium text-white text-[12px] hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
