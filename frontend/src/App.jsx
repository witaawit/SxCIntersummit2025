// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { LoginPage } from './pages/Login';
import { SignupPage } from './pages/Signup';
import { AboutSection } from './pages/AboutSection'; 

import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary

import './index.css';

const App = () => {
  return (
    <ErrorBoundary>
      <div className="font-sans bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
      <Route path="/" element={<HeroSection />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/about" element={<AboutSection />} />
    </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
