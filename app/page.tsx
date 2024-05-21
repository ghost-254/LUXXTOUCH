// Page.tsx


import Services from "@/components/Services";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import People from "@/components/People";
import { testimonials } from "@/constants";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <People />
      <Guide />
      <Services />
      <Testimonials testimonials={testimonials}/>
      <GetApp />
    </>
  )
}