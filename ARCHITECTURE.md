# CG4Academy - Clean Architecture

This project follows Clean Architecture principles to ensure maintainability, testability, and scalability.

## Project Structure

```
src/
├── domain/                 # Enterprise Business Rules
│   ├── entities/          # Core business entities
│   ├── repositories/      # Repository interfaces
│   └── services/          # Domain service interfaces
├── application/           # Application Business Rules  
│   ├── use-cases/        # Application-specific business rules
│   └── services/         # Application services
├── infrastructure/       # Frameworks & Drivers
│   ├── repositories/     # Repository implementations
│   └── api/             # External API integrations
├── presentation/         # Interface Adapters
│   ├── components/       # React components
│   ├── pages/           # Page components
│   └── hooks/           # Custom React hooks
└── shared/              # Shared utilities
    ├── types/           # TypeScript type definitions
    ├── constants/       # Application constants
    └── utils/           # Utility functions
```

## Architecture Layers

### 1. Domain Layer (`src/domain/`)
- **Entities**: Core business objects (User, Course, Enrollment)
- **Repository Interfaces**: Contracts for data access
- **Domain Services**: Core business logic

### 2. Application Layer (`src/application/`)
- **Use Cases**: Application-specific business rules
- **Application Services**: Orchestrate domain objects

### 3. Infrastructure Layer (`src/infrastructure/`)
- **Repository Implementations**: Data access implementations
- **External APIs**: Third-party service integrations
- **Database**: Data persistence layer

### 4. Presentation Layer (`src/presentation/`)
- **Components**: React UI components
- **Pages**: Page-level components
- **Hooks**: Custom React hooks for state management

### 5. Shared Layer (`src/shared/`)
- **Types**: Common TypeScript interfaces
- **Constants**: Application-wide constants
- **Utils**: Utility functions used across layers

## Key Principles

1. **Dependency Inversion**: Inner layers don't depend on outer layers
2. **Single Responsibility**: Each module has one reason to change
3. **Open/Closed**: Open for extension, closed for modification
4. **Interface Segregation**: Clients depend only on interfaces they use
5. **Dependency Injection**: Dependencies are injected rather than created

## Benefits

- **Testability**: Easy to unit test business logic
- **Maintainability**: Clear separation of concerns
- **Flexibility**: Easy to change implementations
- **Scalability**: Can grow without architectural changes
- **Independence**: Framework-agnostic business logic

## Current Features

- Under Construction page with Lottie animations
- Clean architecture foundation
- TypeScript support
- Tailwind CSS for styling
- Next.js 15 with App Router

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) to see the under construction page.

## Future Development

When ready to build features:

1. Define entities in `src/domain/entities/`
2. Create repository interfaces in `src/domain/repositories/`
3. Implement use cases in `src/application/use-cases/`
4. Build UI components in `src/presentation/components/`
5. Implement data access in `src/infrastructure/repositories/`

This architecture ensures your application remains maintainable and testable as it grows.