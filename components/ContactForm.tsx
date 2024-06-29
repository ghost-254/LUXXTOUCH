'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Modal from 'react-modal';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    message: '',
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.user_email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid phone number.');
      return;
    }

    emailjs.send('service_b1xy9fn', 'template_edjdi69', formData, 'aQNOZLkBab4f8VLpx')
      .then((result) => {
        setModalIsOpen(true);
        setTimeout(() => setModalIsOpen(false), 5000);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone</label>
          <PhoneInput
            country={'us'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="w-full p-2 border border-gray-300 rounded"
          />
          {/* Hidden input to include phone in form data */}
          <input type="hidden" name="phone" value={formData.phone} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-customTeal text-white p-2 rounded hover:bg-teal-700"
        >
          Send Message
        </button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded shadow-md text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-green-500 mx-auto mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
          <p>Your message has been successfully sent.</p>
        </div>
      </Modal>
    </div>
  );
};

export default ContactForm;
