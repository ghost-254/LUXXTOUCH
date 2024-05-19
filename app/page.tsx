// Page.tsx


import Services from "@/components/Services";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import People from "@/components/People";
import TestimonialsSection from "@/components/TestimonialsSection";
import { testimonials } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero />
      <People />
      <Guide />
      <Services />
      <TestimonialsSection testimonials={testimonials}/>
      <GetApp />
    </>
  )
}