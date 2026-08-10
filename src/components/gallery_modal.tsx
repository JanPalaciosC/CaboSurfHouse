import { useState, useRef, useEffect } from 'react';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaExpand,
  FaCompress,
} from 'react-icons/fa';
import galleryData from '../data/galleryData.json';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GalleryModal = ({ isOpen, onClose }: GalleryModalProps) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const photos = galleryData.photos;
  const videos = galleryData.videos;

  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ref to store thumbnail buttons securely
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Scroll lock when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Smooth scroll to the active thumbnail when currentIndex changes
  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex]?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [currentIndex]);

  // Preload next and previous images for smoother transitions
  useEffect(() => {
    if (activeTab === 'photos' && photos.length > 0) {
      const nextIndex = (currentIndex + 1) % photos.length;
      const prevIndex = (currentIndex - 1 + photos.length) % photos.length;

      const imgNext = new Image();
      imgNext.src = photos[nextIndex].src;

      const imgPrev = new Image();
      imgPrev.src = photos[prevIndex].src;
    }
  }, [currentIndex, activeTab, photos]);

  if (!isOpen) return null;

  const currentList = activeTab === 'photos' ? photos : videos;

  //  Handle next button click
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentList.length);
  };

  // Handle previous button click
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentList.length) % currentList.length);
  };

  // Toggle fullscreen mode for the media container
  const toggleFullscreen = () => {
    if (!mediaContainerRef.current) return;

    if (!document.fullscreenElement) {
      mediaContainerRef.current.requestFullscreen().catch((err) => {
        console.error('Error al intentar activar pantalla completa:', err);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex flex-col bg-black/95 text-white backdrop-blur-md">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6 border-b border-white/15">
        <div className="flex space-x-4 sm:space-x-6">
          <button
            onClick={() => {
              setActiveTab('photos');
              setCurrentIndex(0);
            }}
            className={`font-serif text-base sm:text-lg tracking-widest uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'photos'
                ? 'border-baja-green text-white'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Photos ({photos.length})
          </button>
          <button
            onClick={() => {
              setActiveTab('videos');
              setCurrentIndex(0);
            }}
            className={`font-serif text-base sm:text-lg tracking-widest uppercase transition-colors pb-1 border-b-2 cursor-pointer ${
              activeTab === 'videos'
                ? 'border-baja-green text-white'
                : 'border-transparent text-gray-400 hover:text-white'
            }`}
          >
            Videos ({videos.length})
          </button>
        </div>

        <button
          onClick={onClose}
          className="rounded-full bg-white/10 p-2 sm:p-3 text-white transition-colors hover:bg-white/20 cursor-pointer"
        >
          <FaTimes className="text-base sm:text-xl" />
        </button>
      </div>

      {/* MAIN CONTENT IMAGES/VIDEOS DISPLAY */}
      <div className="relative flex flex-1 items-center justify-center px-4 overflow-hidden">
        {/* Button Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 rounded-full bg-black/50 p-2 sm:p-4 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-black/80 cursor-pointer"
        >
          <FaChevronLeft className="text-base sm:text-2xl" />
        </button>

        {/* Main container media */}
        <div
          ref={mediaContainerRef}
          className="relative flex max-h-[70vh] max-w-5xl items-center justify-center overflow-hidden bg-black group"
        >
          {/* button fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-30 rounded-full bg-black/60 p-2 sm:p-3 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 cursor-pointer shadow-lg"
            title="Expandir a pantalla completa"
          >
            {isFullscreen ? (
              <FaCompress className="text-sm sm:text-lg" />
            ) : (
              <FaExpand className="text-sm sm:text-lg" />
            )}
          </button>

          {activeTab === 'photos' ? (
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          ) : (
            <video
              src={videos[currentIndex].src}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] max-w-full rounded-lg shadow-2xl"
            />
          )}
        </div>

        {/* Button Next */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 rounded-full bg-black/50 p-2 sm:p-4 text-white backdrop-blur-sm transition-transform hover:scale-110 hover:bg-black/80 cursor-pointer"
        >
          <FaChevronRight className="text-base sm:text-2xl" />
        </button>
      </div>

      {/* Footer slider */}
      <div className="flex flex-col items-center justify-center bg-black/80 py-3 px-4 sm:py-4 sm:px-6 border-t border-white/15">
        <div className="mb-2 sm:mb-3 font-sans text-xs sm:text-sm tracking-widest text-gray-400">
          <span className="text-white font-semibold">{currentIndex + 1}</span> of{' '}
          <span className="text-white font-semibold">{currentList.length}</span>
        </div>

        {/* Carousel miniatures */}
        <div className="flex space-x-2 sm:space-x-3 overflow-x-auto max-w-full pb-2 scrollbar-none">
          {currentList.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => {
                thumbnailRefs.current[index] = el;
              }}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-12 w-16 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-md transition-all cursor-pointer ${
                currentIndex === index
                  ? 'ring-2 ring-baja-green scale-105 opacity-100'
                  : 'opacity-50 hover:opacity-80'
              }`}
            >
              {activeTab === 'photos' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-800 text-white">
                  <FaPlay className="text-xs sm:text-base" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
