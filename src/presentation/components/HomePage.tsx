'use client';

import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, FileUser, Trash2, Sparkles, Zap, Shield } from 'lucide-react';
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
      icon: <FileText className="w-6 h-6" />,
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      id: 'cv-maker',
      title: 'CV Maker',
      description: 'Build stunning professional CVs in minutes',
      href: '/tools/cv-maker',
      icon: <FileUser className="w-6 h-6" />,
      gradient: 'from-cyan-500 via-teal-500 to-emerald-600',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      id: 'pdf-tools',
      title: 'PDF Tools',
      description: 'Compress, merge, and edit PDF documents',
      href: '#',
      icon: <Trash2 className="w-6 h-6" />,
      gradient: 'from-rose-500 via-pink-500 to-purple-600',
      shadowColor: 'shadow-rose-500/20',
      comingSoon: true
    },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning Fast',
      description: 'Built for speed and efficiency'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Private',
      description: 'Your data stays with you'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Always Free',
      description: 'No hidden costs, ever'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Built by Students, For Students
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
            We help with your{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              academic tasks
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-3xl mx-auto">
            Easy, pleasant and productive student tools
          </p>
          
          {/* CTA Section */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button 
                size="lg"
                className="px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold text-lg shadow-xl shadow-emerald-500/25 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 group"
              >
                Explore our tools - it&apos;s free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500">
              <span className="text-sm">or choose one of our {tools.length}+ student tools</span>
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Features Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 hover:border-emerald-300"
              >
                <div className="text-emerald-600">
                  {feature.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-slate-900">{feature.title}</div>
                  <div className="text-xs text-slate-500">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Most Popular
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Tools for Students
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to succeed in your academic journey
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <Link 
                key={tool.id} 
                href={tool.href}
                className={`group block ${tool.comingSoon ? 'pointer-events-none opacity-75' : ''}`}
              >
                <Card className="relative bg-white border border-slate-200 hover:border-slate-300 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-200">
                  {tool.comingSoon && (
                    <div className="absolute top-3 right-3 bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                      Coming Soon
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${tool.gradient} rounded-lg flex items-center justify-center mb-4 text-white`}>
                    {tool.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {tool.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 md:p-16 overflow-hidden">
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Have an idea for a tool? Want to contribute? Let&apos;s build the future of student productivity together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="px-10 py-6 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300"
                >
                  Suggest a Tool
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-10 py-6 border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-50 border-t border-slate-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <span className="text-lg font-semibold text-slate-900">CG4Academy</span>
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-slate-600 font-medium mb-1">
                Built by students, for students
              </p>
              <p className="text-sm text-slate-500">
                © 2025 CG4Academy. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};