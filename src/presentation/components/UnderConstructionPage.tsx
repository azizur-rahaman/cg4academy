'use client';

import { FC, useEffect, useState } from 'react';
import { LottieAnimation } from './LottieAnimation';

export const UnderConstructionPage: FC = () => {
  const [animationData, setAnimationData] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail('');
  };

  useEffect(() => {
    // Load the animation data from public folder
    fetch('/animations/construction-advanced.json')
      .then(response => response.json())
      .then((data) => setAnimationData(data))
      .catch(() => {
        // Fallback simple animation if loading fails
        const fallbackAnimation = {
          v: "5.5.7",
          fr: 30,
          ip: 0,
          op: 60,
          w: 400,
          h: 400,
          nm: "Simple Construction",
          ddd: 0,
          assets: [],
          layers: [
            {
              ddd: 0,
              ind: 1,
              ty: 4,
              nm: "Circle",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { 
                  a: 1,
                  k: [
                    { t: 0, s: [0] },
                    { t: 60, s: [360] }
                  ],
                  ix: 10 
                },
                p: { a: 0, k: [200, 200, 0], ix: 2 },
                a: { a: 0, k: [0, 0, 0], ix: 1 },
                s: { a: 0, k: [100, 100, 100], ix: 6 }
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      d: 1,
                      ty: "el",
                      s: { a: 0, k: [100, 100], ix: 2 },
                      p: { a: 0, k: [0, 0], ix: 3 },
                      nm: "Circle",
                      hd: false
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.6, 0.2, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Fill",
                      hd: false
                    }
                  ],
                  nm: "Circle Group",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  hd: false
                }
              ],
              ip: 0,
              op: 60,
              st: 0,
              bm: 0
            }
          ]
        };
        setAnimationData(fallbackAnimation);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-orange-300 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-yellow-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
        {/* Main Animation */}
        <div className="w-64 h-64 mx-auto mb-8">
          {animationData ? (
            <LottieAnimation
              animationData={animationData}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600"></div>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold text-orange-600 tracking-tight">
            Under
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-yellow-600 tracking-tight">
            Construction
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We're building something amazing! Our website is currently under construction. 
          Stay tuned for an incredible experience.
        </p>

        {/* Construction Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Planning</h3>
            <p className="text-gray-600">Designing the perfect user experience</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Building</h3>
            <p className="text-gray-600">Crafting amazing features</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Testing</h3>
            <p className="text-gray-600">Ensuring everything works perfectly</p>
          </div>
        </div>

        {/* Email Notification */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 mt-12 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get Notified When We Launch
          </h3>
          <p className="text-gray-600 mb-6">
            Be the first to know when we go live!
          </p>
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Notify Me'}
              </button>
            </form>
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full w-3/4 transition-all duration-1000 ease-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};