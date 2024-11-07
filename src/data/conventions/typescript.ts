import { Convention } from '../../types';

export const typescriptConvention: Convention = {
  id: 'typescript-conventions',
  title: 'TypeScript Development Standards',
  description: 'Comprehensive guidelines for writing maintainable TypeScript applications',
  type: 'language',
  category: 'Programming Languages',
  tags: ['typescript', 'javascript', 'web', 'types', 'static-typing'],
  sections: [
    {
      title: 'Key Principles',
      content: `
- Write type-safe code with proper type annotations
- Leverage TypeScript's type system to catch errors at compile time
- Use TypeScript's advanced features appropriately
- Follow consistent naming conventions and code organization
- Maintain proper documentation with TSDoc comments`
    },
    {
      title: 'Type System Usage',
      content: `
- Use strict type checking (strict: true in tsconfig.json)
- Prefer interfaces over type aliases for object types
- Use generics to create reusable, type-safe components
- Implement proper type guards for runtime type checking
- Leverage utility types for common type transformations`
    },
    {
      title: 'Code Organization',
      content: `
- Organize types and interfaces in separate files
- Use barrel exports (index.ts) for clean imports
- Keep related functionality together
- Use modules to encapsulate implementation details
- Maintain clear separation of concerns`
    },
    {
      title: 'Error Handling',
      content: `
- Create custom error classes with proper typing
- Use discriminated unions for error states
- Implement proper error boundaries in React applications
- Use Result types for operations that might fail
- Maintain proper stack traces`
    },
    {
      title: 'Testing',
      content: `
- Write unit tests with proper type coverage
- Use TypeScript-aware testing frameworks
- Implement proper mocking with type safety
- Test type definitions with dtslint
- Maintain high type coverage`
    },
    {
      title: 'Performance',
      content: `
- Use proper types to avoid runtime type checking
- Leverage const assertions for literal types
- Implement proper tree-shaking
- Use proper module resolution strategies
- Optimize compilation settings`
    }
  ],
  references: [
    'https://www.typescriptlang.org/docs/',
    'https://github.com/microsoft/TypeScript',
    'https://basarat.gitbook.io/typescript/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Microsoft TypeScript Team',
    url: 'https://github.com/microsoft/TypeScript',
    avatar: 'https://raw.githubusercontent.com/microsoft/TypeScript/main/doc/logo.svg'
  },
  isActive: true
};