"use client";
import React, { useState } from 'react';

const Footer = () => {
  const [mapError, setMapError] = useState(false);

  const handleMapError = () => {
    setMapError(true);
  };

  return (
    <footer id='footer' className="bg-[#0D71C9] w-full py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-white text-3xl md:text-4xl text-center font-sedgwick mb-12">
          Locations & Hours
        </h1>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-16">
          {/* Info Section */}
          <div className="text-white text-center lg:text-left space-y-8 lg:w-1/3">
            <div className="space-y-1">
              <p className="font-light text-lg">The Souvlucky Country,</p>
              <p className="font-light text-lg">316 Church st.</p>
              <p className="font-light text-lg">Parramatta NSW 2150</p>
            </div>

            <div className="space-y-1">
              <p className="font-light text-lg">
                Monday - Friday 12:00PM - 10:00PM
              </p>
              <p className="font-light text-lg">
                Saturday - Sunday 12:00PM - 11:00PM
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-light text-lg">Tel: (02) 9891 4174</p>
              <p className="font-light text-lg">Email: souvlucky62@gmail.com</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-[327px] rounded-3xl overflow-hidden">
            {mapError ? (
              <div className="w-full h-full flex items-center justify-center bg-blue-400 text-white">
                <p>Unable to load map. Please check your connection.</p>
              </div>
            ) : (
              <iframe
                className="w-full h-full rounded-3xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.873200729198!2d151.20319911520996!3d-33.86881998065456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae24411a2fbf%3A0x686f1a8b4c8972a4!2s316%20Church%20St%2C%20Parramatta%20NSW%202150%2C%20Australia!5e0!3m2!1sen!2sus!4v1625656714753!5m2!1sen!2sus"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white text-sm font-light mt-12">
          © {new Date().getFullYear()} by The Souvlucky Country
        </div>
      </div>
    </footer>
  );
};

export default Footer;
