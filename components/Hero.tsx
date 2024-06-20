'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from './Button'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { type: "image", src: "/phone_launch.png" },
    { type: "image", src: "/phone_usertype.png" },
    { type: "image", src: "/phone_create.png" },
    { type: "image", src: "/phone_evaline.png" },
    { type: "image", src: "/phone_connect.png" },
    { type: "image", src: "/phone_message.png" },
    { type: "video", src: "/chat_video.mp4" }

  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="bg-white max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map bg-pattern-2" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-40 lg:bold-60">Luxurious In-Home Massage Services</h1>
        <p className="regular-16 mt-6 text-gray-400 xl:max-w-[520px]">
          Book professional massage services at your convenience. We are currently available on Android devices only. Download the App now to discover more!
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="text-blue-500 bold-16 lg:bold-20">
            100k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
          <Button 
            type="button" 
            title="Download App"
            icon="/donwloads.svg"
            variant="btn_dark_green" 
          />
        </div>
      </div>

      <div className="relative w-full xl:w-1/2 flex items-center justify-center">
        <button onClick={prevSlide} className="absolute left-4 z-30">‹</button>
        <div className="overflow-hidden w-full">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div className="min-w-full flex justify-center" key={index}>
              {slide.type === "image" ? (
                <Image 
                  src={slide.src}
                  alt={`Phone mockup ${index + 1}`}
                  width={300}
                  height={600}
                />
              ) : (
                <video 
                  src={slide.src}
                  width={300}
                  height={600}
                  autoPlay
                  loop
                  muted
                />
              )}
            </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="absolute right-4 z-30">›</button>
      </div>
    </section>
  )
}

export default Hero
