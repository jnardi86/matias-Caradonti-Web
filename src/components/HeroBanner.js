"use client";

import { Zoom, Fade } from "react-awesome-reveal";

export default function HeroBanner({
  title,
  subtitle,
  videoDesktop,
  videoMobile,
  backgroundImage,
  height = "h-[50vh]",
  overlayColor = "bg-TextDark/80",
  showButton = false,
  buttonText = "",
  onButtonClick,
}) {
  return (
    <section className={`relative w-full ${height} overflow-hidden`}>
      {/* Video background - mobile */}
      {videoMobile && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="block sm:hidden absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoMobile} type="video/mp4" />
        </video>
      )}

      {/* Video background - desktop */}
      {videoDesktop && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden sm:block absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoDesktop} type="video/mp4" />
        </video>
      )}

      {/* Static background image if no video */}
      {!videoDesktop && !videoMobile && backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor} z-10`} />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-6 text-center">
        <div className="w-full mt-10 sm:mt-0 text-white">
          {title && (
            <Zoom triggerOnce>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-semibold mb-4 leading-tight">
                {title}
              </h1>
            </Zoom>
          )}
          {subtitle && (
            <Fade direction="up" delay={500} triggerOnce>
              <p className="font-montserrat text-lg sm:text-xl lg:text-2xl font-light mb-6">
                {subtitle}
              </p>
            </Fade>
          )}
          {showButton && (
            <Fade direction="up" delay={800} triggerOnce>
              <button
                onClick={onButtonClick}
                className="mt-10 px-6 py-4 bg-white/50 text-TextDark font-poppins font-semibold text-lg rounded-md shadow-md backdrop-blur transition duration-300 hover:bg-white hover:scale-105 hover:shadow-lg"
              >
                {buttonText}
              </button>
            </Fade>
          )}
        </div>
      </div>
    </section>
  );
}
