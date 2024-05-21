// Hero.tsx

import Image from 'next/image'
import Button from './Button'

const Hero = () => {
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
    </section>
  )
}

export default Hero