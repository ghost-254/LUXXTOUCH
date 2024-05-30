// Services.tsx

import { SERVICES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <section id='#services' className="bg-gray-100 flex flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <h1 className="text-center text-4xl font-bold lg:text-4xl lg:text-bold lg:text-left">Our Services</h1>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {SERVICES.map((service) => (
              <ServiceItem 
                key={service.title}
                title={service.title} 
                icon={service.icon}
                description={service.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type ServiceItem = {
  title: string;
  icon: string;
  description: string;
}

const ServiceItem = ({ title, icon, description }: ServiceItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  )
}

export default Services