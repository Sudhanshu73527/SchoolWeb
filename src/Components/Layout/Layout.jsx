// src/Components/Layout/Layout.jsx
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; // Adjust path if needed

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
      </header>

      {/* Loading state (optional) */}
      {isLoading && (
        <div className="text-center py-2 bg-yellow-100 text-yellow-700">
          Loading...
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 w-full px-4 py-6">
        <Outlet />
      </main>

      {/* Optional Footer */}
      {/* <footer className="bg-slate-100 text-center py-4 text-sm text-slate-500">
        © 2025 Your School. All rights reserved.
      </footer> */}
    </div>
  );
};

export default Layout;
