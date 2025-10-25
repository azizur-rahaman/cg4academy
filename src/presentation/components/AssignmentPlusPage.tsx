'use client';

import { FC, useState } from 'react';
import Link from 'next/link';

interface CoverPageForm {
  title: string;
  subtitle: string;
  studentName: string;
  studentId: string;
  course: string;
  instructor: string;
  department: string;
  university: string;
  date: string;
  semester: string;
}

export const AssignmentPlusPage: FC = () => {
  const [formData, setFormData] = useState<CoverPageForm>({
    title: '',
    subtitle: '',
    studentName: '',
    studentId: '',
    course: '',
    instructor: '',
    department: '',
    university: '',
    date: new Date().toISOString().split('T')[0],
    semester: ''
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
      setShowPreview(true);
    }, 1500);
  };

  const handleDownload = () => {
    // This would integrate with a PDF generation library
    alert('PDF download functionality will be implemented soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Assignment+</h1>
                <p className="text-sm text-gray-600">Professional Cover Page Generator</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📄</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assignment Details</h2>
            
            <div className="space-y-6">
              {/* Assignment Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Assignment Information</h3>
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Assignment Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., Data Structures and Algorithms Assignment"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle (Optional)
                  </label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={formData.subtitle}
                    onChange={handleInputChange}
                    placeholder="e.g., Implementation of Binary Search Tree"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                    Course *
                  </label>
                  <input
                    type="text"
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    placeholder="e.g., CSE 204 - Data Structures and Algorithms"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Student Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Student Information</h3>
                
                <div>
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700 mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    placeholder="e.g., John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-2">
                    Student ID *
                  </label>
                  <input
                    type="text"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleInputChange}
                    placeholder="e.g., 2021-1-60-001"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Academic Information</h3>
                
                <div>
                  <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-2">
                    Instructor *
                  </label>
                  <input
                    type="text"
                    id="instructor"
                    name="instructor"
                    value={formData.instructor}
                    onChange={handleInputChange}
                    placeholder="e.g., Dr. Jane Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                    Department *
                  </label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    placeholder="e.g., Department of Computer Science and Engineering"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                    University *
                  </label>
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleInputChange}
                    placeholder="e.g., Bangladesh University of Engineering and Technology"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="semester" className="block text-sm font-medium text-gray-700 mb-2">
                      Semester
                    </label>
                    <input
                      type="text"
                      id="semester"
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      placeholder="e.g., Fall 2023"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Submission Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !formData.title || !formData.studentName}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isGenerating ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating...</span>
                  </div>
                ) : (
                  'Generate Cover Page'
                )}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
              {showPreview && (
                <button
                  onClick={handleDownload}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Download PDF</span>
                </button>
              )}
            </div>

            {showPreview ? (
              <div className="bg-white border-2 border-gray-200 rounded-lg p-8 min-h-[600px] shadow-inner">
                {/* Cover Page Preview */}
                <div className="text-center space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                      {formData.title || 'Assignment Title'}
                    </h1>
                    {formData.subtitle && (
                      <h2 className="text-xl text-gray-700 font-medium">
                        {formData.subtitle}
                      </h2>
                    )}
                  </div>

                  <div className="border-t border-b border-gray-300 py-8 space-y-4">
                    <p className="text-lg">
                      <span className="font-semibold">Course:</span> {formData.course || 'Course Name'}
                    </p>
                    <p className="text-lg">
                      <span className="font-semibold">Instructor:</span> {formData.instructor || 'Instructor Name'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg">
                      <span className="font-semibold">Submitted by:</span>
                    </p>
                    <p className="text-xl font-semibold text-blue-600">
                      {formData.studentName || 'Student Name'}
                    </p>
                    <p className="text-lg text-gray-600">
                      ID: {formData.studentId || 'Student ID'}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold">
                      {formData.department || 'Department Name'}
                    </p>
                    <p className="text-lg">
                      {formData.university || 'University Name'}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-8 border-t border-gray-300">
                    {formData.semester && (
                      <p className="text-gray-600">{formData.semester}</p>
                    )}
                    <p className="text-gray-600">
                      {formData.date ? new Date(formData.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'Date'}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-[600px] flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                  <span className="text-4xl">📄</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-4">
                  Cover Page Preview
                </h3>
                <p className="text-gray-500 max-w-sm">
                  Fill in the form details and click &quot;Generate Cover Page&quot; to see your professional assignment cover page preview here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};