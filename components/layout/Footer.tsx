"use client";
import React, { useState } from 'react';

import {
  MapPin,
  Star,
} from 'lucide-react';

// Custom Social Media Icons
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className={className}
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const UberEatsIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    className={className}
    width="100"
    height="100"
    viewBox="0 0 50 50"
  >
    <path d="M 14 4 C 8.486 4 4 8.486 4 14 L 4 36 C 4 41.514 8.486 46 14 46 L 36 46 C 41.514 46 46 41.514 46 36 L 46 14 C 46 8.486 41.514 4 36 4 L 14 4 z M 11.667969 15 L 13.023438 15 L 13.023438 20.464844 C 13.023438 21.896844 13.944125 22.832031 15.203125 22.832031 C 16.443125 22.832031 17.40625 21.880078 17.40625 20.455078 L 17.40625 15 L 18.736328 15 L 18.736328 23.888672 L 17.421875 23.888672 L 17.421875 23.041016 C 16.800875 23.683016 15.942781 24.042109 15.050781 24.037109 C 13.138781 24.037109 11.667969 22.643297 11.667969 20.529297 L 11.667969 15 z M 19.933594 15 L 21.216797 15 L 21.216797 18.189453 C 21.826797 17.572453 22.656437 17.227562 23.523438 17.226562 L 23.527344 17.226562 C 23.575344 17.225562 23.624875 17.225562 23.671875 17.226562 C 25.553875 17.266562 27.047813 18.823078 27.007812 20.705078 C 26.968813 22.587078 25.409344 24.081016 23.527344 24.041016 C 22.653344 24.035016 21.816172 23.682547 21.201172 23.060547 L 21.201172 23.888672 L 19.933594 23.888672 L 19.933594 15 z M 30.929688 17.226562 C 32.802688 17.226562 34.1875 18.681953 34.1875 20.626953 L 34.189453 21.046875 L 28.896484 21.046875 C 29.054484 22.115875 29.968828 22.908062 31.048828 22.914062 C 31.794828 22.925062 32.497641 22.570844 32.931641 21.964844 L 33.863281 22.648438 C 33.207281 23.542437 32.158781 24.062016 31.050781 24.041016 C 29.093781 24.041016 27.59375 22.570953 27.59375 20.626953 L 27.59375 20.607422 C 27.58175 18.753422 29.074687 17.238563 30.929688 17.226562 z M 37.871094 17.316406 L 38.332031 17.316406 L 38.332031 18.511719 L 37.796875 18.513672 C 36.955875 18.513672 36.357422 19.171641 36.357422 20.181641 L 36.357422 23.888672 L 35.074219 23.888672 L 35.074219 17.363281 L 36.34375 17.363281 L 36.34375 18.160156 C 36.66275 17.622156 37.246094 17.299406 37.871094 17.316406 z M 30.912109 18.359375 C 29.948109 18.359375 29.152828 19.031344 28.923828 20.027344 L 32.886719 20.027344 C 32.671719 19.031344 31.877109 18.359375 30.912109 18.359375 z M 23.410156 18.373047 C 22.162156 18.379047 21.157109 19.396531 21.162109 20.644531 C 21.168109 21.892531 22.183641 22.897578 23.431641 22.892578 L 23.431641 22.886719 L 23.441406 22.886719 C 24.680406 22.885719 25.683641 21.879625 25.681641 20.640625 L 25.681641 20.621094 C 25.676641 19.375094 24.658156 18.368047 23.410156 18.373047 z M 11.806641 26.111328 L 18.037109 26.111328 L 18.037109 27.636719 L 13.490234 27.636719 L 13.490234 29.802734 L 17.910156 29.802734 L 17.910156 31.275391 L 13.490234 31.275391 L 13.490234 33.476562 L 18.037109 33.476562 L 18.037109 35 L 11.806641 35 L 11.806641 26.111328 z M 27.890625 26.572266 L 29.548828 26.572266 L 29.548828 28.433594 L 31.40625 28.433594 L 31.40625 29.916016 L 29.548828 29.916016 L 29.548828 33.003906 C 29.548828 33.352906 29.788969 33.519531 30.167969 33.519531 L 31.40625 33.519531 L 31.408203 35.003906 L 29.623047 35.003906 C 28.504047 35.003906 27.884766 34.307688 27.884766 33.429688 L 27.884766 29.917969 L 26.630859 29.917969 L 26.630859 28.433594 L 27.890625 28.433594 L 27.890625 26.572266 z M 34.949219 28.261719 C 36.943219 28.261719 37.927578 29.165203 38.017578 30.533203 L 36.369141 30.533203 C 36.217141 29.806203 35.635609 29.595703 34.849609 29.595703 C 34.123609 29.595703 33.730469 29.836469 33.730469 30.230469 C 33.730469 30.533469 33.986734 30.687844 34.802734 30.839844 L 36.210938 31.126953 C 37.540937 31.415953 38.175781 32.081609 38.175781 32.974609 C 38.173781 34.226609 37.101266 35.138672 35.197266 35.138672 C 33.140266 35.138672 32.127719 34.231234 31.886719 32.865234 L 33.542969 32.865234 C 33.753969 33.592234 34.299 33.802734 35.25 33.802734 C 36.008 33.802734 36.476562 33.545719 36.476562 33.136719 C 36.476562 32.879719 36.309453 32.713797 35.689453 32.591797 L 34.117188 32.228516 C 32.680188 31.926516 32.015625 31.305562 32.015625 30.351562 C 32.015625 28.972562 33.226219 28.261719 34.949219 28.261719 z M 22.175781 28.265625 C 22.939781 28.263625 23.679672 28.532391 24.263672 29.025391 L 24.263672 28.433594 L 25.914062 28.433594 L 25.914062 35 L 24.261719 35 L 24.261719 34.378906 C 23.678719 34.871906 22.939781 35.141672 22.175781 35.138672 C 22.127781 35.139672 22.07825 35.139672 22.03125 35.138672 C 20.13325 35.098672 18.627969 33.526906 18.667969 31.628906 C 18.707969 29.730906 20.277781 28.225625 22.175781 28.265625 z M 22.267578 29.705078 C 21.163578 29.717078 20.278016 30.623563 20.291016 31.726562 C 20.303016 32.830562 21.2095 33.716125 22.3125 33.703125 L 22.308594 33.699219 L 22.330078 33.699219 C 23.421078 33.689219 24.297109 32.796078 24.287109 31.705078 L 24.287109 31.681641 C 24.275109 30.576641 23.370578 29.691078 22.267578 29.705078 z"></path>
  </svg>
);

const Footer = () => {
  const [mapError] = useState(false);

  return (
    <footer id="footer" className="bg-[#0D71C9] w-full py-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-3xl md:text-4xl text-center font-sedgwick mb-12">
          Locations & Hours
        </h2>

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

            {/* Social Media Icons */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Follow Us</h3>
              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://www.facebook.com/SouvLuckyCountryParra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Visit our Facebook page"
                >
                  <FacebookIcon className="w-6 h-6 text-blue-600 group-hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/the_souvlucky_country/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Visit our Instagram page"
                >
                  <InstagramIcon className="w-6 h-6 text-pink-600 group-hover:text-white" />
                </a>
                <a
                  href="https://www.tripadvisor.com.au/Restaurant_Review-g1234132-d20151018-Reviews-The_Souvlucky_Country-Parramatta_Greater_Sydney_New_South_Wales.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Read our reviews on TripAdvisor"
                >
                  <Star className="w-6 h-6 text-green-600 group-hover:text-white" />
                </a>
                <a
                  href="https://www.doordash.com/en-AU/store/souvlucky-country-parramatta-24317144/17387354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Order delivery through DoorDash"
                >
                  <MapPin className="w-6 h-6 text-red-600 group-hover:text-white" />
                </a>
                <a
                  href="https://www.ubereats.com/au/store/the-souvlucky-country-parramatta/CawTnbD_QOORDymCMgztBA?srsltid=AfmBOopUu941Yyd_9w09WBGLql-MY1PiexHhbjOknuSXK7kDMecb0qT7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-green-300 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Order delivery through Uber Eats"
                >
                  <UberEatsIcon className="w-6 h-6 text-black group-hover:text-white" />
                </a>
              </div>
              <div className="text-sm font-light opacity-90">
                <p>Facebook • Instagram • TripAdvisor • DoorDash • UberEats</p>
              </div>
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
                title="Interactive map showing SouvLucky Country restaurant location at 316 Church St, Parramatta NSW 2150"
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
