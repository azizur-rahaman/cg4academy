export const APP_CONFIG = {
  name: 'CG4Academy',
  description: 'Professional Computer Graphics Learning Platform',
  version: '1.0.0',
  contact: {
    email: 'contact@cg4academy.com',
    phone: '+1 (555) 123-4567',
    address: '123 Learning Street, Education City, EC 12345'
  },
  social: {
    twitter: '@cg4academy',
    linkedin: 'cg4academy',
    github: 'cg4academy',
    youtube: 'cg4academy'
  }
} as const;

export const API_ENDPOINTS = {
  users: '/api/users',
  courses: '/api/courses',
  enrollments: '/api/enrollments',
  notifications: '/api/notifications',
  auth: {
    login: '/api/auth/login',
    register: '/api/auth/register',
    logout: '/api/auth/logout',
    refresh: '/api/auth/refresh'
  }
} as const;

export const COURSE_LEVELS = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced'
} as const;

export const NOTIFICATION_TYPES = {
  WELCOME: 'welcome',
  ENROLLMENT: 'enrollment',
  COMPLETION: 'completion',
  REMINDER: 'reminder'
} as const;