import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className="mt-20 text-white p-8 sm:p-10 md:p-12 bg-black font-[cursive]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">
        Subscribe to Our Newsletter
      </h2>
      <label className="block mb-2 text-sm sm:text-base md:text-lg">
        Enter your email here *
      </label>
      <input
        type="email"
        id="email"
        className="w-full sm:w-96 rounded-lg p-2 mb-4 text-sm sm:text-base md:text-lg"
        placeholder="your.email@example.com"
        required
      />

      <div className="flex items-center mb-4">
        <input type="checkbox" id="subscribe" className="mr-2" />
        <label className="text-muted-foreground text-sm sm:text-base md:text-lg">
          Yes, subscribe me to your newsletter.
        </label>
      </div>

      <button className="bg-black border-2 px-5 border-white text-white hover:bg-green-500 hover:border-green-500 hover:text-black duration-300 rounded-lg p-2 md:w-auto">
        Subscribe
      </button>

      <div className="flex flex-col sm:flex-row justify-between mt-6">
        <div className="flex space-x-4 justify-center sm:justify-start mb-4 sm:mb-0">
          <Link href="#" className="sm:text-base md:text-xl">
            <FaFacebook />
          </Link>
          <Link href="#" className="sm:text-base md:text-xl">
            <FaTwitter />
          </Link>
          <Link href="#" className="sm:text-base md:text-xl">
            <IoLogoYoutube />
          </Link>
        </div>
        <div className="text-muted-foreground text-sm sm:text-base md:text-lg text-center sm:text-right">
          © 2035 by TheHours. Powered and secured by Syed Saud Ali
        </div>
      </div>
    </div>
  );
}

export default Footer;
