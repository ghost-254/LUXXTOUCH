// People.tsx

import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface PeopleProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const PeopleJoined = ({ backgroundImage, title, subtitle, peopleJoined }: PeopleProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
      </div>
     </div>
    </div>
  )
}

const People = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <PeopleJoined 
          backgroundImage="bg-bg-img-1"
          title="Deep to Your Soul"
          subtitle="Relax, Enjoy the Vibe"
          peopleJoined="13k+ Users"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-blue-400 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Key Benefits?</strong>
          </h2>
          <li className="regular-14 xl:regular-16 mt-5 text-white">
            Secure Payments
          </li>
          <li className="regular-14 xl:regular-16 mt-5 text-white">
            Absolute Discretion
          </li>
          <li className="regular-14 xl:regular-16 mt-5 text-white">
            Flexible Scheduling
          </li>
          <li className="regular-14 xl:regular-16 mt-5 text-white">
            Professional Masseuses/Masseurs
          </li>
          <p className="regular-5 md:regular-10 2xl:regular-10 text-white mt-3">"What Happens in Lux Vegas Stays in Lux Vegas"</p>
          <Image 
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default People