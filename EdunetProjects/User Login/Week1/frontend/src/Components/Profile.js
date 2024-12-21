import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Digital Wallet</h1>
          <p className="text-gray-600 mt-2">Your personal digital wallet for all transactions.</p>
        </header>

     
     
        <div className="mt-16 text-center">
          <Link to="/" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">
            Go to Dashboard
          </Link>
        </div>
      
        <section className="my-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Get Started with Your Digital Wallet</h2>
          <p className="text-gray-600">
            Manage your finances, view transaction history, and securely store your digital assets all in one place.
          </p>
          <p className="mt-4 text-lg text-gray-800">
            Your wallet is currently empty. Please add funds or connect a bank account to get started.
          </p>
        </section>

        <section className="my-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="list-inside list-disc text-gray-700">
            <li>Track your balance and spending.</li>
            <li>Make secure transactions with your wallet.</li>
            <li>View detailed transaction history and reports.</li>
            <li>Receive payments and transfers.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Profile;
