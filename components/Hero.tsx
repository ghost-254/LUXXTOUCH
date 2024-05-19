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
        Join us in a transformative journey of self-discovery and pleasure. Whether you're a masseuse or masseur ready to showcase your expertise or a client seeking to indulge in unparalleled relaxation, Luxx offers an immersive experience like no other. Create your accounts now by downloading the app or by visiting Google Play Store. As a masseuse or masseur, you get to connect with clients seeking your expertise. And as a client, you get to dive into a world of choice where you swipe through profiles to find the perfect match for your desires. Let Luxx be your passport to a global exploration of sensations—all within the convenience of a single mobile service.
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

          <p className="text-red-400 bold-16 lg:bold-20">
            100k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Download App" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Discover How we work on the App" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>
    </section>
  )
}

export default Hero