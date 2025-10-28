'use client';

import { FC, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCourseById } from '@/src/infrastructure/data/lms-data';
import { Header } from '@/src/presentation/components/Header';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Lightbulb, Code, Trophy, CheckCircle2 } from 'lucide-react';

export const LearningPage: FC = () => {
  const params = useParams();
  const router = useRouter();
  const courseId = params.courseId as string;
  const institutionId = params.institutionId as string;

  const course = getCourseById(courseId);
  const [selectedTopicId, setSelectedTopicId] = useState(course?.topics[0]?.id || '');
  const [activeTab, setActiveTab] = useState<'understand' | 'practice' | 'master'>('understand');

  if (!course) {
    return <div>Course not found</div>;
  }

  const selectedTopic = course.topics.find(t => t.id === selectedTopicId);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="flex h-screen pt-16">
        {/* Left Sidebar - Topics */}
        <div className="w-80 bg-white border-r border-slate-200 overflow-y-auto">
          <div className="p-6">
            <button
              onClick={() => router.push(`/lms/institutions/${institutionId}/courses`)}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Courses</span>
            </button>

            <h2 className="text-xl font-bold text-slate-900 mb-2">{course.title}</h2>
            <p className="text-sm text-slate-600 mb-6">{course.topics.length} Topics</p>

            <div className="space-y-2">
              {course.topics.map((topic, index) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopicId(topic.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    selectedTopicId === topic.id
                      ? 'bg-emerald-50 border-2 border-emerald-500 text-emerald-900'
                      : 'bg-slate-50 border-2 border-transparent text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      selectedTopicId === topic.id
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-300 text-slate-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium leading-tight">{topic.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            {selectedTopic && (
              <>
                <h1 className="text-3xl font-bold text-slate-900 mb-8">{selectedTopic.title}</h1>

                {/* 3-Step Tabs */}
                <div className="flex gap-4 mb-8">
                  <button
                    onClick={() => setActiveTab('understand')}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                      activeTab === 'understand'
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-blue-500'
                    }`}
                  >
                    <Lightbulb className="w-5 h-5" />
                    <span>Understand</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('practice')}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                      activeTab === 'practice'
                        ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-emerald-500'
                    }`}
                  >
                    <Code className="w-5 h-5" />
                    <span>Practice</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('master')}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold transition-all ${
                      activeTab === 'master'
                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-500'
                    }`}
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Master</span>
                  </button>
                </div>

                {/* Content Area */}
                <Card className="bg-white border border-slate-200 rounded-xl p-8">
                  {activeTab === 'understand' && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{selectedTopic.content.understand.title}</h2>
                      </div>
                      <div 
                        className="prose prose-slate max-w-none"
                        dangerouslySetInnerHTML={{ __html: selectedTopic.content.understand.content }}
                      />
                    </div>
                  )}

                  {activeTab === 'practice' && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{selectedTopic.content.practice.title}</h2>
                      </div>
                      <p className="text-slate-600 mb-6">Apply what you learned through these exercises</p>
                      
                      <div className="space-y-4">
                        {selectedTopic.content.practice.exercises.map((exercise, index) => (
                          <Card key={exercise.id} className="bg-slate-50 border border-slate-200 p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className="font-bold text-slate-900">{exercise.title}</h3>
                                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                    exercise.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                                    exercise.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-red-100 text-red-700'
                                  }`}>
                                    {exercise.difficulty}
                                  </span>
                                </div>
                                <p className="text-slate-600 text-sm">{exercise.description}</p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'master' && (
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">{selectedTopic.content.master.title}</h2>
                      </div>
                      <p className="text-slate-600 mb-6">Build something real or teach it to others to truly master this topic</p>
                      
                      <div className="space-y-6">
                        {selectedTopic.content.master.projects.map((project, index) => (
                          <Card key={project.id} className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-bold text-slate-900 mb-2 text-lg">{project.title}</h3>
                                <p className="text-slate-600 mb-4">{project.description}</p>
                                <div className="bg-white rounded-lg p-4 border border-purple-200">
                                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                    Requirements:
                                  </h4>
                                  <ul className="space-y-2">
                                    {project.requirements.map((req, i) => (
                                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                        <span className="text-purple-500 font-bold mt-0.5">•</span>
                                        <span>{req}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
