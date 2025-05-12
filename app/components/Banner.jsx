import React from 'react'

const Banner = () => {
  return (

    <div
      className="relative h-screen media-max-545px:h-[60vh] w-full"
      style={{
        backgroundImage: "url('/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for dark contrast (optional) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Heading */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
          Construction Card Services
        </h1>
      </div>
    </div>


  )
}

export default Banner
