// CloseAccount.tsx
'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import Loader from './Loader'; // Import the Loader component

const CloseAccount: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    reason: '',
  });
  const [confirmation, setConfirmation] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false); // State to track sending status

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

    if (!confirmation) {
      alert('Please confirm that you want to close your account.');
      return;
    }

    setIsSending(true); // Show loader
    emailjs.send('service_b1xy9fn', 'template_close_account', formData, 'aQNOZLkBab4f8VLpx')
      .then((result) => {
        setIsSending(false); // Hide loader
        setModalIsOpen(true);
        setTimeout(() => setModalIsOpen(false), 5000);
      }, (error) => {
        setIsSending(false); // Hide loader
        console.log(error.text);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Close Account</h2>
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
          <label className="block text-gray-700 mb-2">Reason for closing your account (optional)</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows={4}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={confirmation}
              onChange={() => setConfirmation(!confirmation)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">I confirm that I want to close my account.</span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700"
        >
          Close Account
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
          <h2 className="text-2xl font-bold mb-2">Request Sent!</h2>
          <p>Your request to close your account has been successfully sent.</p>
        </div>
      </Modal>
      <Modal
        isOpen={isSending}
        onRequestClose={() => setIsSending(false)}
        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-8 rounded shadow-md text-center">
          <Loader /> {/* Show the loader */}
        </div>
      </Modal>
    </div>
  );
};

export default CloseAccount;
