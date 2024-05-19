"use client"

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {

      setShowSuccess(true);
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle the error
    }
  };

  return (
    <section className="py-20">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-black rounded shadow-md">
      {showSuccess && (
        <div className="bg-green-100 text-green-800 p-4 mb-4 rounded">
          Message sent successfully!
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="firstName" className="block text-white text-sm font-bold mb-2">
          First Name *
        </label>
        <input 
          type="text" 
          id="firstName" 
          name="firstName" 
          placeholder="Enter your first name"
          value={formData.firstName} 
          onChange={handleChange} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="middleName" className="block text-white text-sm font-bold mb-2">
          Middle Name
        </label>
        <input 
          type="text" 
          id="middleName" 
          name="middleName" 
          placeholder="Enter your middle name"
          value={formData.middleName} 
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastName" className="block text-white text-sm font-bold mb-2">
          Last Name *
        </label>
        <input 
          type="text" 
          id="lastName" 
          name="lastName" 
          placeholder="Enter your last name"
          value={formData.lastName} 
          onChange={handleChange} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-white text-sm font-bold mb-2">
          Phone Number (e.g +1, +254,...)*
        </label>
        <input 
          type="number" 
          id="phone" 
          name="phone" 
          placeholder="Enter your phone number"
          value={formData.phone} 
          onChange={handleChange} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-white text-sm font-bold mb-2">
          Email *
        </label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          placeholder="example@example.com"
          value={formData.email} 
          onChange={handleChange} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-white text-sm font-bold mb-2">
          Message *
        </label>
        <textarea 
          id="message" 
          name="message" 
          rows={4} 
          placeholder="Enter your message"
          value={formData.message} 
          onChange={handleChange} 
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        />
      </div>

      <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Send Message
      </button>
    </form>
    </section>
  );
};

export default ContactForm;
