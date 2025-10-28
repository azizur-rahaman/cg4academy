'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
              C
            </div>
            <span className="text-xl font-semibold text-gray-900">CG4Academy</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#tools" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              All Tools
            </Link>
            <Link 
              href="/tools/assigmentplus" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Assignment+
            </Link>
            <Link 
              href="/tools/cv-maker" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              CV Maker
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost"
              className="hidden md:inline-flex text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </Button>
            <Button 
              className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
