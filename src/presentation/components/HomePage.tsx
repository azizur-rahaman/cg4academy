'use client';

import { FC } from 'react';
import Link from 'next/link';

export const HomePage: FC = () => {
  const tools = [
    {
      id: 'assignmentplus',
      title: 'Assignment+',
      description: 'An assignment cover page generator to create professional-looking cover pages for your assignments',
      href: '/tools/assignmentplus',
      icon: '📄',
      color: 'from-blue-500 to-purple-600'
    },
    // Add more tools here in the future
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-cyan-200 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Passionate Students
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-700">
              Making Tools for Students
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering academic excellence through innovative tools built by students, for students. 
              Simplify your academic journey with our carefully crafted solutions.
            </p>
          </div>

          {/* Student Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Problem Solvers</h3>
              <p className="text-gray-600 leading-relaxed">
                We identify real academic challenges and create practical solutions that make student life easier and more productive.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Using cutting-edge technology and creative thinking to build tools that streamline academic workflows and boost efficiency.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Built by the student community, for the student community. Every tool is designed with real student needs in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover powerful tools designed to enhance your academic experience and streamline your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link 
                key={tool.id} 
                href={tool.href}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{tool.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-700 transition-colors duration-300">
                    <span>Try it now</span>
                    <svg 
                      className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            {/* Coming Soon Card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[300px]">
              <div className="w-16 h-16 bg-gray-300 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-4">More Tools Coming Soon</h3>
              <p className="text-gray-500 leading-relaxed">
                We're constantly working on new tools to make your academic life easier. Stay tuned for exciting updates!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Have an idea for a tool? Want to contribute? Join our community of passionate students building the future of academic tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300 transform hover:scale-105">
              Suggest a Tool
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};