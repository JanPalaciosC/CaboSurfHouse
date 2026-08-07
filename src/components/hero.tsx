const Hero = () => {
  return (
    <section
      id="home"
      // CAMBIO 1: Usamos h-[100dvh] para que abarque toda la pantalla del celular
      // de forma dinámica, ignorando la barra de direcciones del navegador web.
      className="relative h-[100dvh] min-h-[600px] w-full bg-gray-900 overflow-hidden"
    >
      {/* Background video */}
      <video
        src="gallery/video/video_baja_house_compress.mp4"
        poster="gallery/video/3_baja_surf_house.webp"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Noise through SVG */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.10] mix-blend-overlay">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      {/* Gray - black - gray */}
      <div className="absolute inset-0 z-0 bg-linear-to-r from-gray-600/40 via-black/50 to-gray-600/40 pointer-events-none"></div>

      {/* Text content with buttons */}
      <div className="relative z-10 flex h-full flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-24">
        <h1 className="mb-4 max-w-2xl font-serif font-medium text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          LIVE THE EAST CAPE LIFESTYLE
        </h1>

        {/* --- CAMBIOS DEL CLIENTE AQUÍ --- */}
        {/* Se aumentó el tamaño a text-lg en móvil, sm:text-xl y md:text-2xl para que sea más visible */}
        <p className="mb-2 font-sans font-medium text-lg text-white sm:text-xl md:text-2xl">
          Surf. Fish. Relax. Golf.
        </p>

        {/* Se agregaron las nuevas frases de venta y un 'max-w-2xl' para que el texto largo no pierda la estética */}
        <p className="mb-8 max-w-2xl font-sans font-medium leading-relaxed text-lg text-white sm:text-xl md:text-2xl">
          Your off-grid sanctuary in Zacatitos. Ideal for Digital Nomads and a huge opportunity for
          an investment property.
        </p>
        {/* -------------------------------- */}

        {/* Buttons container */}
        <div className="flex flex-col space-y-4 font-sans sm:flex-row sm:space-x-4 sm:space-y-0">
          <a
            href="#the-house"
            className="bg-baja-blue px-8 py-3 text-center text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-baja-green"
          >
            View The House
          </a>
          <a
            href="#contact"
            className="border border-white bg-transparent px-8 py-3 text-center text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:scale-105 hover:bg-white hover:text-baja-dark"
          >
            Schedule A Tour
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
