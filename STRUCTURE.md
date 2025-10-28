# CG4Academy - Clean Architecture

## Project Structure

```
src/
├── core/                      # Core business logic (domain-agnostic)
│   ├── entities/             # Core entities
│   ├── interfaces/           # Core interfaces and contracts
│   └── use-cases/            # Core use cases
│
├── features/                  # Feature-based modules
│   ├── home/                 # Home feature
│   │   └── presentation/
│   │       └── components/
│   │           └── HomePage.tsx
│   │
│   └── lms/                  # Learning Management System feature
│       ├── domain/           # Domain layer (business rules)
│       │   └── types.ts      # LMS domain types
│       ├── data/             # Data layer (repositories, data sources)
│       │   └── lms-data.ts   # LMS data and mock data
│       └── presentation/     # Presentation layer (UI)
│           ├── components/   # Reusable LMS components
│           └── pages/        # LMS pages
│               ├── LMSHomePage.tsx
│               ├── CoursesPage.tsx
│               └── LearningPage.tsx
│
└── shared/                    # Shared across features
    ├── components/           # Shared UI components
    │   └── Header.tsx
    ├── utils/                # Utility functions
    ├── types/                # Shared types
    └── constants/            # Shared constants

app/                          # Next.js app directory (routes)
components/                   # UI components library (shadcn/ui)
lib/                         # External libraries configuration
public/                      # Static assets
```

## Architecture Principles

### Clean Architecture Layers

1. **Core Layer** (`src/core/`)
   - Contains domain-agnostic business logic
   - Pure functions and entities
   - No dependencies on external frameworks

2. **Features Layer** (`src/features/`)
   - Feature-based organization
   - Each feature has its own domain, data, and presentation layers
   - **Domain**: Business rules and types specific to the feature
   - **Data**: Data access, repositories, API calls
   - **Presentation**: UI components and pages

3. **Shared Layer** (`src/shared/`)
   - Common utilities, components, and types
   - Reusable across all features

### Dependency Rules

- **Inner layers don't depend on outer layers**
- Core → Features → App
- Features are independent of each other
- Shared utilities can be used by any feature

## Features

### Home Feature
- Landing page
- Tool showcase
- Navigation

### LMS (Learning Management System) Feature
- Institution selection
- Course browsing
- 3-step learning system:
  1. Understand the Concept
  2. Practice It
  3. Master It

## Benefits of This Structure

1. **Modularity**: Features are self-contained and can be developed independently
2. **Scalability**: Easy to add new features without affecting existing ones
3. **Maintainability**: Clear separation of concerns
4. **Testability**: Each layer can be tested independently
5. **Reusability**: Shared components and utilities promote DRY principles

## Adding a New Feature

1. Create feature directory: `src/features/[feature-name]/`
2. Add domain layer: `domain/types.ts`
3. Add data layer: `data/[feature-data].ts`
4. Add presentation layer: `presentation/components/` and `presentation/pages/`
5. Create index.ts for exports
6. Add routes in `app/[feature-route]/`

## Import Patterns

```typescript
// Feature exports
import { HomePage } from '@/src/features/home';
import { LMSHomePage, CoursesPage } from '@/src/features/lms';

// Shared components
import { Header } from '@/src/shared/components';

// UI components
import { Button } from '@/components/ui/button';
```
