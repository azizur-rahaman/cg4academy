import { User, Course, Enrollment } from '../entities';

export interface UserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User>;
  update(id: string, user: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
}

export interface CourseRepository {
  findById(id: string): Promise<Course | null>;
  findAll(): Promise<Course[]>;
  findByLevel(level: Course['level']): Promise<Course[]>;
  create(course: Omit<Course, 'id' | 'createdAt' | 'updatedAt'>): Promise<Course>;
  update(id: string, course: Partial<Course>): Promise<Course>;
  delete(id: string): Promise<void>;
}

export interface EnrollmentRepository {
  findById(id: string): Promise<Enrollment | null>;
  findByUserId(userId: string): Promise<Enrollment[]>;
  findByCourseId(courseId: string): Promise<Enrollment[]>;
  create(enrollment: Omit<Enrollment, 'id' | 'enrolledAt'>): Promise<Enrollment>;
  updateProgress(id: string, progress: number): Promise<Enrollment>;
  markCompleted(id: string): Promise<Enrollment>;
  delete(id: string): Promise<void>;
}