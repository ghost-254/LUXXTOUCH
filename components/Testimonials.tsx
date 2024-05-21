// TestimonialsSection.tsx

import React from 'react';
import Image from 'next/image';

interface Testimonial {
  author: string;
  text: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-400 via-purple-500 to-pink-500 py-24">
      <div className="max-container">
        <h2 className="text-white text-center mb-12 font-bold text-3xl md:text-4xl lg:text-5xl">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative bg-black rounded-lg p-8 hover:bg-gradient-to-r from-red-400 via-blue-400 to-green-400 transform transition-all hover:scale-105 duration-500 flex flex-col justify-between max-w-sm w-full py-10 px-5">
      <div className="absolute top-0 left-0 z-10 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Image key={i} src="/star.svg" alt="star" width={24} height={24} />
        ))}
      </div>
      <p className="text-white mb-6">{testimonial.text}</p>
      <p className="text-white font-bold">{testimonial.author}</p>
    </div>
  );
};

export default TestimonialsSection;
