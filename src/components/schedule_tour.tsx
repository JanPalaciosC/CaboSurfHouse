import { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const ScheduleTour = () => {
  // Array Imágenes para el slideshow (3 images)
  const slideshowImages = [
    'gallery/4_baja_surf_house.webp',
    'gallery/13_baja_surf_house.webp',
    'gallery/20_baja_surf_house.webp',
  ];

  // Slideshow State
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    //Interval temp
    const intervalId = setInterval(() => {
      //Update index, if it reaches the end, go back to 0 (circle)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    }, 6000);

    // Clean-up function to clear the interval when the component unmounts or when slideshowImages.length changes
    return () => clearInterval(intervalId);
  }, [slideshowImages.length]);

  // List of benefits for the checklist
  const benefits = [
    'Private showings available.',
    'Download the Buyer Guide.',
    'View rental income details.',
    'Inquire about financing.',
  ];

  return (
    <section id="schedule-tour" className="flex w-full flex-col bg-baja-light lg:flex-row">
      {/* Left Side: Texts and Buttons */}
      <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-8 md:px-16 lg:w-1/2 lg:pl-24 lg:pr-16">
        <h2 className="mb-10 font-serif text-3xl font-semibold leading-snug tracking-widest text-baja-dark uppercase sm:text-4xl md:mb-12">
          SCHEDULE YOUR PRIVATE <br /> TOUR
        </h2>

        {/* Checklist */}
        <ul className="mb-12 ml-0 flex flex-col space-y-5 sm:ml-4 sm:space-y-6 md:mb-14 lg:ml-10">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center text-baja-dark">
              <FaCheck className="mr-4 shrink-0 text-xl text-baja-dark sm:mr-6" />
              <span className="font-sans text-base sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>

        {/* buttons */}
        <div className="flex flex-col space-y-4 font-sans sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="#contact"
            className="bg-baja-blue px-8 py-3 text-center text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-baja-green"
          >
            CONTACT US TODAY
          </a>
          <a
            href="./buyers_guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-baja-dark bg-transparent px-8 py-3 text-center text-sm font-semibold tracking-widest text-baja-dark uppercase transition-all duration-300 hover:scale-105 hover:bg-baja-dark hover:text-baja-light"
          >
            BUYER GUIDE
          </a>
        </div>
      </div>

      {/* Right Side: THE SLIDESHOW WITH FADE AND OVERLAYS */}
      <div className="relative z-0 min-h-[350px] w-full overflow-hidden bg-gray-900 sm:min-h-[400px] lg:w-1/2 lg:min-h-[600px]">
        {/* Render images */}
        {slideshowImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Baja Surf House Tour Slideshow ${index + 1}`}
            className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-2000 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            `}
          />
        ))}

        {/* Noise Overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilterTour">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.5"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilterTour)" />
          </svg>
        </div>

        {/* general overlay*/}
        <div className="pointer-events-none absolute inset-0 z-10"></div>
      </div>
    </section>
  );
};

export default ScheduleTour;
