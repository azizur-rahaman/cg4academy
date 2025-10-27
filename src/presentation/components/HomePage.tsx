'use client';

import { FC } from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Zap, Users, Sparkles } from 'lucide-react';
import SparklesText from '@/components/sparklestext';
import MagicContainer from '@/components/magiccard';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const HomePage: FC = () => {
  const tools = [
    {
      id: 'assignmentplus',
      title: 'Assignment+',
      description: 'An assignment cover page generator to create professional-looking cover pages for your assignments',
      href: '/tools/assigmentplus',
      icon: '📄',
      color: 'from-blue-500 to-purple-600'
    },
    // Add more tools here in the future
  ];

  const features = [
    {
      icon: <Target className="w-10 h-10" />,
      title: 'Problem Solvers',
      description: 'We identify real academic challenges and create practical solutions that make student life easier and more productive.',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Innovation Driven',
      description: 'Using cutting-edge technology and creative thinking to build tools that streamline academic workflows and boost efficiency.',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500'
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Community Focused',
      description: 'Built by the student community, for the student community. Every tool is designed with real student needs in mind.',
      gradient: 'from-green-500 via-teal-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-7xl mx-auto text-center z-10 py-20">
          {/* Badge */}
          <div className="inline-block mb-8 animate-in fade-in slide-in-from-top duration-1000">
            <div className="px-6 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
              <span className="text-sm font-medium text-white/90 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Built by Students, For Students
                <Sparkles className="w-4 h-4 text-purple-400" />
              </span>
            </div>
          </div>
          
          {/* Main Headline with SparklesText */}
          <div className="space-y-8 mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              <SparklesText 
                className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                sparkleCount={12}
                colors={{ first: '#818cf8', second: '#c084fc' }}
              >
                Passionate Students
              </SparklesText>
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white/95 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
              Making Tools for Students
            </h2>
            
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              Empowering academic excellence through innovative tools. 
              Simplify your academic journey with our carefully crafted solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <Button 
                size="lg"
                className="px-10 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all duration-300 transform hover:scale-105 group"
              >
                Explore Tools
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-10 py-6 border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats or Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <div className="text-white/60 text-lg">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-white/60 text-lg">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-white/60 text-lg">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Us</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
              We&apos;re not just building tools, we&apos;re building the future of student productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MagicContainer key={index} className="h-full">
                <Card className="bg-gray-900/50 backdrop-blur-xl border-white/10 p-8 h-full hover:bg-gray-900/70 transition-all duration-300 group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </MagicContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 flex items-center justify-center gap-4 flex-wrap">
              Our
              <SparklesText 
                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                sparkleCount={8}
                colors={{ first: '#818cf8', second: '#c084fc' }}
              >
                Tools
              </SparklesText>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto">
              Discover powerful tools designed to enhance your academic experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link 
                key={tool.id} 
                href={tool.href}
                className="group block h-full"
              >
                <MagicContainer className="h-full">
                  <Card className="bg-gray-900/50 backdrop-blur-xl border-white/10 p-8 h-full hover:bg-gray-900/70 transition-all duration-300">
                    <div className={`w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30`}>
                      <span className="text-4xl">{tool.icon}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {tool.title}
                    </h3>
                    
                    <p className="text-white/70 text-lg leading-relaxed mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="flex items-center text-indigo-400 font-semibold text-lg group-hover:text-indigo-300 transition-colors duration-300">
                      <span>Try it now</span>
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </Card>
                </MagicContainer>
              </Link>
            ))}

            {/* Coming Soon Card */}
            <MagicContainer className="h-full">
              <Card className="bg-gray-900/30 backdrop-blur-xl border-2 border-dashed border-white/20 p-8 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-4xl">🔨</span>
                </div>
                <h3 className="text-3xl font-bold text-white/80 mb-4">More Tools Coming Soon</h3>
                <p className="text-white/60 text-lg leading-relaxed">
                  We&apos;re constantly working on new tools to make your academic life easier. Stay tuned!
                </p>
              </Card>
            </MagicContainer>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <MagicContainer>
            <div className="text-center bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 lg:p-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex items-center justify-center gap-3 flex-wrap">
                <span className="text-white">Join Our</span>
                <SparklesText 
                  className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent"
                  sparkleCount={10}
                  colors={{ first: '#a78bfa', second: '#f0abfc' }}
                >
                  Community
                </SparklesText>
              </h2>
              <p className="text-xl md:text-2xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                Have an idea for a tool? Want to contribute? Join our community of passionate students building the future of academic tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="px-12 py-7 bg-white text-gray-900 hover:bg-white/90 rounded-xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  Suggest a Tool
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="px-12 py-7 border-2 border-white/30 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
                >
                  Get Involved
                </Button>
              </div>
            </div>
          </MagicContainer>
        </div>
      </section>
    </div>
  );
};