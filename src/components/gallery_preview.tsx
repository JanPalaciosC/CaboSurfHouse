import { useState, lazy, Suspense } from 'react';

const GalleryModal = lazy(() => import('./gallery_modal'));

const GalleryPreview = () => {
  // Modal state to control the visibility of the gallery modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array of photos for the gallery preview
  const photos = [
    { id: 1, src: 'gallery/24_baja_surf_house.webp' },
    { id: 2, src: 'gallery/11_baja_surf_house.webp' },
    { id: 3, src: 'gallery/23_baja_surf_house.webp' },
    { id: 4, src: 'gallery/stairs.webp' },
    { id: 5, src: 'gallery/front_house_2.webp' },
    { id: 6, src: 'gallery/hill_sunset.webp' },
    { id: 7, src: 'gallery/coach_inside.webp' },
  ];

  return (
    <section
      id="gallery"
      className="relative flex h-[70vh] md:h-[90vh] w-full items-center justify-center overflow-hidden bg-baja-dark"
    >
      {/* Images containers background */}
      <div className="absolute inset-0 flex h-full w-full">
        {photos.map((photo, index) => {
          let visibilityClass = '';
          if (index >= 3 && index <= 4) visibilityClass = 'hidden sm:block';
          if (index >= 5) visibilityClass = 'hidden lg:block';

          return (
            <div
              key={photo.id}
              className={`group relative h-full flex-1 overflow-hidden ${visibilityClass}`}
            >
              {/* Images with the zoom effect */}
              <img
                src={photo.src}
                alt={`Gallery preview ${photo.id}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay for each photo */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:opacity-0"></div>
            </div>
          );
        })}
      </div>
      {/* Noise Overlay for all photos at once */}
      <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilterGallery">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilterGallery)" />
        </svg>
      </div>
      {/* General Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-baja-dark/90 via-baja-dark/20 to-baja-dark/90"></div>
      {/* Main Button */}
      <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center px-4">
        <button
          className="pointer-events-auto border border-white bg-black/40 px-6 py-3 sm:px-8 text-center font-sans text-xs sm:text-sm font-semibold tracking-widest text-white uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white hover:text-baja-dark cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          WATCH MORE IN OUR GALLERY
        </button>
      </div>
      {/* Gallery Modal Component */}
      <Suspense fallback={null}>
        {isModalOpen && <GalleryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </Suspense>{' '}
    </section>
  );
};

export default GalleryPreview;
