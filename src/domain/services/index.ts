export interface NotificationService {
  sendWelcomeEmail(email: string, name: string): Promise<void>;
  sendCourseEnrollmentNotification(email: string, courseName: string): Promise<void>;
  sendCourseCompletionNotification(email: string, courseName: string): Promise<void>;
}

export interface EmailService {
  send(to: string, subject: string, body: string): Promise<void>;
  sendTemplate(to: string, templateId: string, data: Record<string, unknown>): Promise<void>;
}

export interface AuthenticationService {
  authenticate(email: string, password: string): Promise<string | null>; // returns token
  validateToken(token: string): Promise<boolean>;
  generateToken(userId: string): Promise<string>;
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hash: string): Promise<boolean>;
}