'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { institutions } from '@/src/infrastructure/data/lms-data';
import { Header } from '@/src/presentation/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, ChevronDown } from 'lucide-react';

export const LMSHomePage: FC = () => {
  const router = useRouter();
  const [selectedInstitution, setSelectedInstitution] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const handleContinue = () => {
    if (selectedInstitution) {
      router.push(`/lms/institutions/${selectedInstitution}/courses`);
    }
  };

  const selectedInst = institutions.find(inst => inst.id === selectedInstitution);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl mb-6 shadow-lg shadow-emerald-500/25">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                LMS
              </span>
            </h1>
            <p className="text-lg text-slate-600">
              Learn, Practice, and Master your courses
            </p>
          </div>

          {/* Institution Selection Card */}
          <Card className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Select Your Institution
              </label>
              
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full px-4 py-3 text-left bg-white border-2 border-slate-200 rounded-lg hover:border-emerald-500 focus:border-emerald-500 focus:outline-none transition-colors flex items-center justify-between"
                >
                  <span className={selectedInst ? 'text-slate-900' : 'text-slate-400'}>
                    {selectedInst ? selectedInst.name : 'Choose your institution...'}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-xl max-h-60 overflow-auto">
                    {institutions.map((institution) => (
                      <button
                        key={institution.id}
                        onClick={() => {
                          setSelectedInstitution(institution.id);
                          setIsOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                          selectedInstitution === institution.id ? 'bg-emerald-50 text-emerald-700' : 'text-slate-700'
                        }`}
                      >
                        {institution.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Button
              onClick={handleContinue}
              disabled={!selectedInstitution}
              className="w-full py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl font-semibold text-lg shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              Continue to Courses
            </Button>
          </Card>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {['Understand', 'Practice', 'Master'].map((step, index) => (
              <div key={step} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <span className="font-semibold text-slate-900">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
