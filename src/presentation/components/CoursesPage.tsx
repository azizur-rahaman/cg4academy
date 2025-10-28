'use client';

import { FC } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getCoursesByInstitution, getInstitutionById } from '@/src/infrastructure/data/lms-data';
import { Header } from '@/src/presentation/components/Header';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';

export const CoursesPage: FC = () => {
  const params = useParams();
  const router = useRouter();
  const institutionId = params.institutionId as string;

  const institution = getInstitutionById(institutionId);
  const courses = getCoursesByInstitution(institutionId);

  if (!institution) {
    return <div>Institution not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />

      <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.push('/lms')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Institution Selection</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
              {institution.name}
            </h1>
            <p className="text-lg text-slate-600">
              Select a course to start learning
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/lms/institutions/${institutionId}/courses/${course.id}`}
              >
                <Card className="bg-white border border-slate-200 hover:border-emerald-500 rounded-xl p-6 h-full hover:shadow-lg transition-all duration-200 group cursor-pointer">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-105 transition-transform">
                    <BookOpen className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {course.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{course.topics.length} Topics</span>
                  </div>
                </Card>
              </Link>
            ))}

            {courses.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-500 text-lg">No courses available for this institution yet.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
