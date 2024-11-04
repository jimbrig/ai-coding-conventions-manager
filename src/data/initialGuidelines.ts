import { Guideline } from '../types';

export const initialGuidelines: Guideline[] = [
  {
    id: 'code-organization',
    title: 'Code Organization Standards',
    description: 'Universal principles for maintaining clean, maintainable code',
    category: 'general',
    tags: ['organization', 'structure', 'maintainability'],
    content: '- Keep files under 300 lines of code\n- One component/class per file\n- Group related functions and imports\n- Use meaningful directory structure\n- Separate concerns (logic, UI, state, etc.)\n- Maintain consistent file naming conventions',
    isActive: true
  },
  {
    id: 'naming-conventions',
    title: 'Naming Conventions',
    description: 'Standards for naming variables, functions, and files',
    category: 'general',
    tags: ['naming', 'conventions', 'readability'],
    content: '- Use camelCase for variables and functions\n- Use PascalCase for classes and components\n- Use kebab-case for file names\n- Choose descriptive, meaningful names\n- Avoid abbreviations unless widely known\n- Prefix boolean variables with is/has/should\n- Use verb prefixes for functions (get, set, handle, etc.)',
    isActive: true
  },
  {
    id: 'code-comments',
    title: 'Documentation Standards',
    description: 'Guidelines for code documentation and comments',
    category: 'general',
    tags: ['documentation', 'comments', 'jsdoc'],
    content: '- Document all public APIs and functions\n- Write self-documenting code\n- Use JSDoc for function documentation\n- Keep comments current and relevant\n- Explain why, not what\n- Document edge cases and limitations\n- Include usage examples for complex functions',
    isActive: true
  },
  {
    id: 'error-handling',
    title: 'Error Handling Practices',
    description: 'Standards for handling and managing errors',
    category: 'general',
    tags: ['errors', 'exceptions', 'debugging'],
    content: '- Use try-catch blocks appropriately\n- Create custom error classes\n- Provide meaningful error messages\n- Log errors with proper context\n- Handle async errors with try-await-catch\n- Implement proper error boundaries\n- Never swallow errors silently',
    isActive: true
  },
  {
    id: 'react-best-practices',
    title: 'React Best Practices',
    description: 'Standard conventions for React development',
    category: 'framework',
    tags: ['react', 'frontend', 'components'],
    content: '- Use functional components with hooks\n- Follow the Single Responsibility Principle\n- Implement proper error boundaries\n- Use meaningful component names\n- Maintain consistent file structure',
    isActive: true
  },
  {
    id: 'typescript-conventions',
    title: 'TypeScript Standards',
    description: 'TypeScript coding conventions and type safety guidelines',
    category: 'language',
    tags: ['typescript', 'types', 'interfaces'],
    content: '- Use strict type checking\n- Prefer interfaces over type aliases for objects\n- Implement proper error handling\n- Use meaningful variable names\n- Document complex types',
    isActive: true
  },
  {
    id: 'python-guidelines',
    title: 'Python Coding Standards',
    description: 'PEP 8 and best practices for Python development',
    category: 'language',
    tags: ['python', 'pep8', 'formatting'],
    content: '- Follow PEP 8 style guide\n- Use snake_case for functions and variables\n- Use PascalCase for class names\n- Maximum line length of 79 characters\n- Use type hints for function arguments and return values\n- Use docstrings for modules, classes, and functions\n- Use virtual environments for project dependencies\n- Prefer list comprehensions over map/filter when readable\n- Use context managers (with statements) for resource management\n- Import order: standard library, third-party, local application\n- Use f-strings for string formatting\n- Implement proper exception handling with specific exceptions',
    isActive: true
  },
  {
    id: 'sql-guidelines',
    title: 'SQL Best Practices',
    description: 'Standards for writing efficient and maintainable SQL',
    category: 'language',
    tags: ['sql', 'database', 'queries'],
    content: '- Use UPPERCASE for SQL keywords\n- Use meaningful table and column names\n- Include appropriate indexing strategies\n- Write one keyword per line for complex queries\n- Use proper table aliases in JOINs\n- Avoid SELECT *\n- Use parameterized queries to prevent SQL injection\n- Include appropriate WHERE clauses\n- Use appropriate data types for columns\n- Implement proper transaction management\n- Document complex queries\n- Use appropriate constraints (PRIMARY KEY, FOREIGN KEY, etc.)\n- Optimize queries for performance\n- Use appropriate normalization forms',
    isActive: true
  },
  {
    id: 'javascript-guidelines',
    title: 'JavaScript Best Practices',
    description: 'Modern JavaScript development standards',
    category: 'language',
    tags: ['javascript', 'es6+', 'web'],
    content: '- Use const and let, avoid var\n- Use arrow functions for callbacks\n- Implement proper Promise handling\n- Use async/await for asynchronous operations\n- Use template literals for string interpolation\n- Implement proper error handling\n- Use destructuring assignment\n- Use spread/rest operators appropriately\n- Use modules for code organization\n- Implement proper memory management\n- Use appropriate data structures\n- Follow proper event handling practices\n- Use appropriate security measures\n- Implement proper testing strategies',
    isActive: true
  },
  {
    id: 'powershell-guidelines',
    title: 'PowerShell Best Practices',
    description: 'Standards for PowerShell scripting and automation',
    category: 'language',
    tags: ['powershell', 'windows', 'automation'],
    content: '- Use approved verbs for function names\n- Use PascalCase for function names\n- Use proper error handling with try-catch\n- Implement proper logging\n- Use comment-based help\n- Use parameter validation attributes\n- Implement proper pipeline handling\n- Use appropriate scope for variables\n- Follow security best practices\n- Use appropriate modules and snapins\n- Implement proper credential handling\n- Use appropriate output formatting\n- Follow proper remote execution practices\n- Use appropriate execution policies',
    isActive: true
  },
  {
    id: 'r-guidelines',
    title: 'R Programming Standards',
    description: 'Best practices for R statistical computing',
    category: 'language',
    tags: ['r', 'statistics', 'data-science'],
    content: '- Use descriptive variable names\n- Document code with roxygen2\n- Use proper package management\n- Implement proper error handling\n- Use vectorization when possible\n- Use appropriate data structures\n- Implement proper memory management\n- Use tidyverse principles when appropriate\n- Follow proper project organization\n- Use appropriate testing frameworks\n- Implement proper data validation\n- Use appropriate visualization practices\n- Follow proper statistical methods\n- Use appropriate documentation formats',
    isActive: true
  },
  {
    id: 'fastapi-guidelines',
    title: 'FastAPI Best Practices',
    description: 'Standards for building FastAPI applications',
    category: 'framework',
    tags: ['python', 'fastapi', 'api', 'backend'],
    content: '- Use Pydantic models for request/response validation\n- Implement proper dependency injection\n- Use async/await for I/O-bound operations\n- Implement proper error handling with HTTPException\n- Use proper status codes and response models\n- Implement proper authentication/authorization\n- Use proper path operation decorators\n- Implement proper middleware\n- Use proper background tasks\n- Document APIs using OpenAPI/Swagger\n- Implement proper testing with TestClient\n- Use proper configuration management\n- Implement proper logging\n- Use proper database session management\n- Implement proper CORS handling\n- Use proper rate limiting\n- Implement proper file uploads handling\n- Use proper WebSocket handling when needed',
    isActive: true
  },
  {
    id: 'postgresql-plpgsql-guidelines',
    title: 'PostgreSQL/PL/pgSQL Standards',
    description: 'Best practices for PostgreSQL stored procedures and functions',
    category: 'framework',
    tags: ['postgresql', 'plpgsql', 'database', 'stored-procedures'],
    content: '- Use proper function naming conventions\n- Implement proper error handling with EXCEPTION blocks\n- Use proper variable declarations\n- Implement proper transaction management\n- Use proper parameter naming\n- Implement proper return types\n- Use proper cursors when needed\n- Implement proper triggers\n- Use proper temporary tables\n- Document complex procedures\n- Implement proper security (SECURITY DEFINER vs INVOKER)\n- Use proper schema management\n- Implement proper versioning\n- Use proper performance optimization techniques\n- Implement proper logging\n- Use proper access control\n- Implement proper testing procedures\n- Use proper backup and recovery procedures',
    isActive: true
  },
  {
    id: 'r-shiny-guidelines',
    title: 'R Shiny Best Practices',
    description: 'Standards for building R Shiny applications',
    category: 'framework',
    tags: ['r', 'shiny', 'web-apps', 'interactive'],
    content: '- Use proper module structure\n- Implement proper reactive programming\n- Use proper UI components\n- Implement proper server logic\n- Use proper input validation\n- Implement proper error handling\n- Use proper state management\n- Implement proper caching\n- Use proper performance optimization\n- Document UI/server components\n- Implement proper testing\n- Use proper deployment strategies\n- Implement proper security measures\n- Use proper logging\n- Implement proper user authentication\n- Use proper database connections\n- Implement proper file handling\n- Use proper progress indicators\n- Implement proper bookmarking\n- Use proper CSS/JavaScript integration',
    isActive: true
  },
  {
    id: 'r-plumber-guidelines',
    title: 'R Plumber API Standards',
    description: 'Best practices for building R Plumber APIs',
    category: 'framework',
    tags: ['r', 'plumber', 'api', 'backend'],
    content: '- Use proper endpoint naming conventions\n- Implement proper request/response handling\n- Use proper HTTP methods\n- Implement proper parameter validation\n- Use proper error handling\n- Implement proper authentication/authorization\n- Use proper logging\n- Implement proper rate limiting\n- Use proper CORS handling\n- Document API endpoints\n- Implement proper testing\n- Use proper deployment strategies\n- Implement proper security measures\n- Use proper caching strategies\n- Implement proper database connections\n- Use proper serialization/deserialization\n- Implement proper middleware\n- Use proper versioning\n- Implement proper health checks\n- Use proper monitoring',
    isActive: true
  }
];