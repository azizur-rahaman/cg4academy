import { User, Course, Enrollment } from '@/domain/entities';
import { UserRepository, CourseRepository, EnrollmentRepository } from '@/domain/repositories';
import { NotificationService } from '@/domain/services';

export class UserRegistrationUseCase {
  constructor(
    private userRepository: UserRepository,
    private notificationService: NotificationService
  ) {}

  async execute(userData: {
    email: string;
    name: string;
    password: string;
  }): Promise<User> {
    // Check if user already exists
    const existingUser = await this.userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    // Create new user
    const user = await this.userRepository.create({
      email: userData.email,
      name: userData.name,
    });

    // Send welcome email
    await this.notificationService.sendWelcomeEmail(user.email, user.name);

    return user;
  }
}

export class CourseEnrollmentUseCase {
  constructor(
    private userRepository: UserRepository,
    private courseRepository: CourseRepository,
    private enrollmentRepository: EnrollmentRepository,
    private notificationService: NotificationService
  ) {}

  async execute(userId: string, courseId: string): Promise<Enrollment> {
    // Validate user exists
    const user = await this.userRepository.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Validate course exists
    const course = await this.courseRepository.findById(courseId);
    if (!course) {
      throw new Error('Course not found');
    }

    // Check if already enrolled
    const existingEnrollments = await this.enrollmentRepository.findByUserId(userId);
    const alreadyEnrolled = existingEnrollments.some(e => e.courseId === courseId);
    if (alreadyEnrolled) {
      throw new Error('User is already enrolled in this course');
    }

    // Create enrollment
    const enrollment = await this.enrollmentRepository.create({
      userId,
      courseId,
      progress: 0,
    });

    // Send notification
    await this.notificationService.sendCourseEnrollmentNotification(user.email, course.title);

    return enrollment;
  }
}