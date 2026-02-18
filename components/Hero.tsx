import React from 'react';
import Lightning from './Lightning';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Lightning Background */}
      <div className="absolute inset-0 w-full h-full">
        <Lightning
          hue={220}
          xOffset={0}
          speed={1}
          intensity={1}
          size={1}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Radiant Gold Gems
          </h1>

          {/* Subtitle with Roles */}
          <div className="space-y-3">
            <p className="text-2xl sm:text-3xl text-blue-300 font-semibold drop-shadow-md">
              Joyería fina y gemas preciosas
            </p>
            <p className="text-xl sm:text-2xl text-cyan-300 drop-shadow-md">
              Oro, esmeraldas y diseños exclusivos
            </p>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 drop-shadow-md max-w-2xl mx-auto">
            Brillamos con piezas únicas en oro y gemas auténticas, diseñadas para cada ocasión especial.
            Calidad, elegancia y confianza en cada detalle.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <a
              href="#about"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
            >
              Conocer Más / Learn More
            </a>
            <a
              href="mailto:charliepinilla29@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition transform hover:scale-105"
            >
              Contáctanos / Get in Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-8 animate-bounce">
            <svg
              className="w-8 h-8 mx-auto text-cyan-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
