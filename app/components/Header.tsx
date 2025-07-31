'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg">
              <Image
                src="/logo.png"
                alt="Logo Bakso Murniati"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                Bakso Murniati
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Sejak 2015
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Tentang
            </button>
            <button 
              onClick={() => scrollToSection('location')}
              className={`hover:text-red-600 transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Lokasi
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              Kontak
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-800 hover:text-red-600 transition-colors text-left"
              >
                Beranda
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-800 hover:text-red-600 transition-colors text-left"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-800 hover:text-red-600 transition-colors text-left"
              >
                Tentang
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="text-gray-800 hover:text-red-600 transition-colors text-left"
              >
                Lokasi
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Kontak
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}