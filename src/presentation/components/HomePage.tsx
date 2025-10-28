'use client';

import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, FileUser, Trash2 } from 'lucide-react';
import { Header } from './Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const HomePage: FC = () => {
  const tools = [
    {
      id: 'assignment-plus',
      title: 'Assignment+',
      description: 'Create professional assignment cover pages with ease',
      href: '/tools/assigmentplus',
      icon: <FileText className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      id: 'cv-maker',
      title: 'CV Maker',
      description: 'Build stunning professional CVs in minutes',
      href: '/tools/cv-maker',
      icon: <FileUser className="w-8 h-8" />,
      color: 'bg-cyan-500'
    },
    {
      id: 'pdf-tools',
      title: 'PDF Tools',
      description: 'Compress, merge, and edit PDF documents',
      href: '#',
      icon: <Trash2 className="w-8 h-8" />,
      color: 'bg-rose-500',
      comingSoon: true
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96" style={{
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96" style={{
            backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We help with your academic tasks
          </h1>
          <p className="text-2xl md:text-3xl text-emerald-500 font-medium mb-12">
            Easy, pleasant and productive student tools
          </p>
          
          <div className="inline-flex flex-col items-center gap-6">
            <Button 
              size="lg"
              className="px-10 py-6 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Explore our tools - it&apos;s free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span>or choose one of our {tools.length}+ student tools</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 C300,100 600,0 900,50 C1050,75 1125,88 1200,100 L1200,120 L0,120 Z" 
              fill="#f3f4f6"
              opacity="0.5"
            />
            <path 
              d="M0,70 C300,20 600,100 900,70 C1050,55 1125,48 1200,40 L1200,120 L0,120 Z" 
              fill="#e5e7eb"
            />
          </svg>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 uppercase tracking-wide">
              Most Popular
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <Link 
                key={tool.id} 
                href={tool.href}
                className={`group block ${tool.comingSoon ? 'pointer-events-none' : ''}`}
              >
                <Card className="bg-white border border-gray-200 hover:border-gray-300 rounded-2xl p-8 h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                  {tool.comingSoon && (
                    <div className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                      Coming Soon
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 ${tool.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Built by students, for students
          </p>
          <p className="text-sm text-gray-500">
            © 2025 CG4Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};