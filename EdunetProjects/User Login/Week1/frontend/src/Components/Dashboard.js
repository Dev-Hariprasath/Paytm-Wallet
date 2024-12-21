import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Welcome to Your Digital Wallet</h1>
          <p className="text-center text-gray-600 mt-2">
            Manage your digital assets, track transactions, and make secure payments all in one place.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Securely store and manage your digital currency.</li>
              <li>Track your wallet balance and transaction history.</li>
              <li>Make instant payments and transfers.</li>
              <li>Access detailed spending reports and analytics.</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-700">
              Your Digital Wallet is ready to use! You can now start managing your funds, send and receive payments, and keep track of your balance. Simply connect your bank account or transfer funds to begin using your wallet.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
        <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
              Login
            </button>
          </Link>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-gray-500">&copy; 2024 Digital Wallet. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
