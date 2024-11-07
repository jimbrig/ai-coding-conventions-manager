import { Convention } from '../../types';

export const dotnetConvention: Convention = {
  id: 'dotnet-conventions',
  title: '.NET Development Standards',
  description: 'Best practices for building scalable applications with .NET and C#',
  type: 'framework',
  category: 'Backend Frameworks',
  tags: ['.net', 'csharp', 'aspnet', 'backend', 'microsoft'],
  sections: [
    {
      title: 'Code Style and Structure',
      content: `
- Write concise, idiomatic C# code
- Follow .NET and ASP.NET Core conventions
- Use appropriate design patterns
- Prefer LINQ for collection operations
- Use descriptive names for methods and variables`
    },
    {
      title: 'Naming Conventions',
      content: `
- Use PascalCase for types and methods
- Use camelCase for variables
- Use UPPERCASE for constants
- Prefix interfaces with "I"
- Use meaningful and descriptive names`
    },
    {
      title: 'Architecture',
      content: `
- Follow Clean Architecture principles
- Implement proper dependency injection
- Use appropriate design patterns
- Maintain separation of concerns
- Follow SOLID principles`
    },
    {
      title: 'API Design',
      content: `
- Follow RESTful principles
- Use proper HTTP methods
- Implement proper versioning
- Use appropriate status codes
- Document APIs with Swagger`
    },
    {
      title: 'Security',
      content: `
- Implement proper authentication
- Use proper authorization
- Follow security best practices
- Protect against common vulnerabilities
- Use HTTPS and proper encryption`
    },
    {
      title: 'Performance',
      content: `
- Use async/await properly
- Implement efficient caching
- Optimize LINQ queries
- Use proper connection pooling
- Monitor application performance`
    }
  ],
  references: [
    'https://docs.microsoft.com/en-us/dotnet/',
    'https://docs.microsoft.com/en-us/aspnet/core/',
    'https://docs.microsoft.com/en-us/ef/core/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Taylor Beck',
    url: 'https://github.com/TaylorBeck',
    avatar: 'https://pbs.twimg.com/profile_images/1601309070203363328/bxphVPdY_400x400.jpg'
  },
  isActive: true
};