// Guide.tsx

import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/art.svg" alt="massage-art" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-40 xl:max-w-[390px]">Leading You to an Orgasmic Experience</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Luxx is your gateway to a world where every touch is an adventure, igniting passion and pleasure. With our exclusive mapping feature, you'll always meet those close to you. Invite your friends for an exhilarating escapade through lush valleys and summit the peaks of ecstasy together. "Luxx is Where Sensuality Meets Exploration."</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full h-90 mb-8">
        <Image 
          src="/sensual20.jpg"
          alt="massage-table"
          width={1080}
          height={500}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center max-container">
      <div className="text-center lg:text-left lg:mr-10">
      <h1 className='font-bold text-2xl lg:text-4xl xl:max-w-[390px]'>Swipe through profiles and Chat to book!</h1>
      <p className='mt-2 text-base lg:text-lg xl:max-w-[390px]'>
        Easily connect with professionals and book appointments seamlessly through our intuitive chat feature. Explore profiles and find the right match for your needs.
      </p>
      </div>
      <div className='w-full max-w-md lg:max-w-lg'>
      <Image 
        src="/book_chat.png"
        alt="booking and chatting"
        layout='responsive'
        width={400}
        height={500}
        className="w-full object-cover object-center 2xl:rounded-5xl"
      />
      </div>
</div>



    </section>
  ) 
}

export default Guide
