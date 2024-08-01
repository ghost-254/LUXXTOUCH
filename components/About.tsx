import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white max-container px-4 py-10 md:px-8 lg:px-10 lg:py-16">
      <div className="mb-12">
        <h2 className="text-center text-4xl font-bold mb-10">About Lux</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <p className="text-gray-600 text-base">
            Welcome to Lux, your premier destination for professional and sensual massage experiences delivered directly to your doorstep. With our user-friendly Mobile App, we focus on delivering top-notch massage services customized to your specific desires. Explore and schedule sessions with your preferred masseuse or masseur effortlessly by swiping through different profiles in the app.
          </p>
          <img src="/massage2.jpg" alt="Image 1" className="rounded-lg w-full max-w-md" />
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-10">Our Mission</h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <img src="/massage1.jpeg" alt="Image 2" className="rounded-lg w-full max-w-md" />
          <p className="text-gray-600 text-base">
            At Lux, our mission is to redefine relaxation by offering professional and sensual massage experiences that elevate the senses and ignite the spirit. We believe that massage is not just a luxury but an essential component of self-care, and we are committed to delivering unparalleled service that leaves you feeling pampered and rejuvenated.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-10">The Lux-ury Experience</h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <p className="text-gray-600 text-base">
            Indulge in the ultimate sensory journey with Lux massage services. With our innovative platform, you have the freedom to swipe through profiles of our skilled and experienced masseuses and masseurs, exploring their unique styles and specialties. From there, you can select and book with the one who resonates with you the most, ensuring a truly personalized and unforgettable massage experience.
          </p>
          <img src="/sensual16.jpg" alt="Image 3" className="rounded-lg w-full max-w-md" />
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-10">Our Team</h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <img src="/sensual14.PNG" alt="Image 4" className="rounded-lg w-full max-w-md" />
          <p className="text-gray-600 text-base">
            At the heart of Lux Touch is our team of professional masseuses and masseurs who are experts in the art of sensual massage. Trained in a variety of techniques, our team members possess the skill and intuition to create an atmosphere of intimacy and relaxation that will transport you to a state of pure ecstasy.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="text-3xl font-bold text-center mb-10">Safety & Discretion</h3>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <p className="text-gray-600 text-base">
            We understand the importance of privacy and discretion when it comes to sensual massage experiences. Rest assured that your safety and confidentiality are our top priorities. Our team members adhere to strict professional standards, and we take every precaution to ensure that your massage experience is both safe and discreet.
          </p>
          <img src="/discretion.jpg" alt="Image 5" className="rounded-lg w-full max-w-md" />
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-center mb-10">Get in Touch</h3>
        <div className="flex flex-col md:flex-row items-center gap-8 mt-4 max-w-5xl mx-auto">
          <img src="/sensual15.PNG" alt="Image 6" className="rounded-lg w-full max-w-md" />
          <p className="text-gray-600 text-base">
            Embark on a journey of sensual discovery with Lux Vita. Book your professional and sensual massage appointment today and experience the ultimate in luxury and indulgence. For inquiries or assistance, please don't hesitate to contact us at <a href="mailto:info@luxxtouch.com" className="text-blue-500 hover:underline">info@luxxtouch.com</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
