// pages/close-account.tsx
"use client"

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const CloseAccount = () => {
  const [reason, setReason] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!confirmation) {
      alert('Please confirm that you want to close your account.');
      return;
    }

    // Handle the account closure logic here
    // For example, make an API call to close the user's account

    alert('Your account has been closed.');
    router.push('/'); // Redirect to the home page after closing the account
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Close Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
              Reason for closing your account (optional)
            </label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Close Account
            </button>
            <Link href="/" className="text-sm text-indigo-600 hover:text-indigo-800">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CloseAccount;
