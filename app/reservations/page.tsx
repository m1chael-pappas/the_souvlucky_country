"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ReservationsPage() {
  const [buttonReady, setButtonReady] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Force load and cache the Quandoo script
    const loadQuandooScript = () => {
      // Check if script is already cached in localStorage
      const cachedScript = localStorage.getItem('quandoo-widget-script');
      const scriptVersion = '1.0.0'; // Change this to force re-cache if needed
      
      if (cachedScript && localStorage.getItem('quandoo-script-version') === scriptVersion) {
        // Execute cached script
        try {
          const scriptFunc = new Function(cachedScript);
          scriptFunc();
          console.log('Quandoo script loaded from cache');
          setScriptLoaded(true);
          initializeButton();
          return;
        } catch (error) {
          console.error('Cached script execution failed:', error);
          localStorage.removeItem('quandoo-widget-script');
          localStorage.removeItem('quandoo-script-version');
        }
      }

      // Load script fresh and cache it
      const script = document.createElement('script');
      script.src = 'https://s3-eu-west-1.amazonaws.com/quandoo-website/widget-builder/quandoo-widget-builder.js';
      script.onload = () => {
        console.log('Quandoo script loaded fresh');
        setScriptLoaded(true);
        
        // Cache the script content
        fetch(script.src)
          .then(response => response.text())
          .then(scriptContent => {
            localStorage.setItem('quandoo-widget-script', scriptContent);
            localStorage.setItem('quandoo-script-version', scriptVersion);
            console.log('Quandoo script cached');
          })
          .catch(error => console.error('Failed to cache script:', error));
        
        initializeButton();
      };
      script.onerror = () => {
        console.error('Failed to load Quandoo script');
        setButtonReady(true); // Show fallback button
      };
      
      document.head.appendChild(script);
    };

    const initializeButton = () => {
      // Force re-initialize the button
      setTimeout(() => {
        const buttonContainer = document.querySelector('.quandoo-widget-builder');
        if (buttonContainer && (window as any).QuandooWidgetBuilder) {
          try {
            (window as any).QuandooWidgetBuilder.init();
            console.log('Quandoo button initialized');
            setButtonReady(true);
          } catch (error) {
            console.error('Button initialization failed:', error);
            setButtonReady(true); // Show fallback
          }
        } else {
          console.log('Button container or QuandooWidgetBuilder not found, retrying...');
          setTimeout(initializeButton, 500);
        }
      }, 100);
    };

    loadQuandooScript();
  }, []);

  const openQuandooDirectly = () => {
    // Fallback: open Quandoo directly in new tab
    window.open('https://www.quandoo.com.au/restaurants/105769', '_blank');
  };

  return (
    <>
      
      <div className="min-h-screen bg-blue-50 py-36">
      {/* Title */}
      <h1 className="text-5xl font-semibold text-center text-[#0D71C9] mb-8">
        Make a reservation
      </h1>

      {/* Hero Image */}
      <div className="container mx-auto mb-8 px-4">
        <Image
          src="/Rectangle 37.png"
          alt="Restaurant interior showcasing the dining atmosphere at SouvLucky Country"
          width={1200}
          height={800}
          className="mx-auto rounded-2xl"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          quality={85}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+ZaBjVurhTJLEuZpWOSSxJJJJJJJJH//Z"
        />
      </div>

      {/* Instructions */}
      <div className="container mx-auto mb-8 px-4 text-center">
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          Book your table at SouvLucky Country and experience authentic Greek
          flavors in the heart of Parramatta. Select your preferred date and
          time below.
        </p>
      </div>

      {/* Quandoo Booking Widget */}
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-[#0D71C9] mb-4">
              Reserve Your Table
            </h2>
            <p className="text-gray-600">
              Use our online booking system to secure your table
            </p>
          </div>

          {/* Quandoo Widget Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl text-center">
              {/* Always show the button container */}
              <div 
                className="quandoo-widget-builder" 
                data-config='{"format":"text-button","bgcolor":"#0D71C9","txcolor":"#ffffff","round":"yes","position":"center","font":"md","merchant":105769,"txt":"Book Now"}'
              ></div>
              
              {/* Fallback button if Quandoo fails */}
              {buttonReady && !scriptLoaded && (
                <div className="text-center mt-4">
                  <button
                    onClick={openQuandooDirectly}
                    className="bg-[#0D71C9] text-white px-8 py-3 rounded-lg hover:bg-[#03233C] transition-colors font-medium"
                  >
                    Book Now
                  </button>
                  <p className="text-sm text-gray-500 mt-2">
                    Click here to make a reservation directly
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 mt-12">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#0D71C9] mb-4">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            For large groups or special requests, please call us directly.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
