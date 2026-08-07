import { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

// Le decimos a TypeScript que window.YT existe para que no marque error
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        window.onYouTubeIframeAPIReady = () => {
          initializePlayer();
        };
      } else {
        initializePlayer();
      }
    }, 3000); // 3000 milisegundos

    function initializePlayer() {
      playerRef.current = new window.YT.Player('yt-player-bg', {
        videoId: 'vsEst0pq-Js',
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, playsinline: 1 },
        events: {
          onReady: () => setIsReady(true),
          onStateChange: (event: any) => {
            if (event.data === 1) setIsPlaying(true);
            else if (event.data === 2 || event.data === 0) setIsPlaying(false);
            if (event.data === 0) playerRef.current.playVideo();
          },
        },
      });
    }

    // Clean up the timer if the component unmounts before the 3 seconds
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    // If the player isn't ready or the reference is null, we do nothing
    if (!isReady || !playerRef.current) return;

    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  return (
    <>
      {/* Hiding the YouTube iframe */}
      <div className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0">
        <div id="yt-player-bg"></div>
      </div>

      {/* Floating Button */}
      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 sm:bottom-8 sm:right-8 ${
          isPlaying
            ? 'bg-baja-green text-white'
            : 'border-2 border-baja-blue bg-white text-baja-blue'
        }`}
        title={isPlaying ? 'Pause Music' : 'Play Vibe'}
      >
        {isPlaying ? <FaPause size={20} /> : <FaMusic size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
