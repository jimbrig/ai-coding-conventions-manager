import { Convention } from '../../types';

export const codeOrganizationConvention: Convention = {
  id: 'code-organization',
  title: 'Code Organization Standards',
  description: 'Universal principles for maintaining clean, maintainable code',
  type: 'general',
  category: 'Best Practices',
  tags: ['organization', 'structure', 'maintainability'],
  sections: [
    {
      title: 'File Organization',
      content: `
- Keep files under 300 lines of code
- One component/class per file
- Group related functions and imports
- Use meaningful directory structure
- Separate concerns (logic, UI, state, etc.)
- Maintain consistent file naming conventions`
    }
  ],
  references: [
    'https://clean-code-developer.com/',
    'https://www.martinfowler.com/articles/modularization.html'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Clean Code Team',
    url: 'https://clean-code-developer.com/'
  },
  isActive: true
};

export const namingConvention: Convention = {
  id: 'naming-conventions',
  title: 'Naming Conventions',
  description: 'Standards for naming variables, functions, and files',
  type: 'general',
  category: 'Best Practices',
  tags: ['naming', 'conventions', 'readability'],
  sections: [
    {
      title: 'General Rules',
      content: `
- Use camelCase for variables and functions
- Use PascalCase for classes and components
- Use kebab-case for file names
- Choose descriptive, meaningful names
- Avoid abbreviations unless widely known
- Prefix boolean variables with is/has/should
- Use verb prefixes for functions (get, set, handle, etc.)`
    }
  ],
  references: [
    'https://clean-code-developer.com/naming-conventions',
    'https://www.martinfowler.com/bliki/TwoHardThings.html'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Clean Code Team',
    url: 'https://clean-code-developer.com/'
  },
  isActive: true
};

export const documentationConvention: Convention = {
  id: 'documentation-standards',
  title: 'Documentation Standards',
  description: 'Guidelines for code documentation and comments',
  type: 'general',
  category: 'Best Practices',
  tags: ['documentation', 'comments', 'jsdoc'],
  sections: [
    {
      title: 'Documentation Guidelines',
      content: `
- Document all public APIs and functions
- Write self-documenting code
- Use JSDoc for function documentation
- Keep comments current and relevant
- Explain why, not what
- Document edge cases and limitations
- Include usage examples for complex functions`
    }
  ],
  references: [
    'https://jsdoc.app/',
    'https://www.writethedocs.org/guide/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Documentation Team',
    url: 'https://www.writethedocs.org/'
  },
  isActive: true
};

export const errorHandlingConvention: Convention = {
  id: 'error-handling',
  title: 'Error Handling Practices',
  description: 'Standards for handling and managing errors',
  type: 'general',
  category: 'Best Practices',
  tags: ['errors', 'exceptions', 'debugging'],
  sections: [
    {
      title: 'Error Handling Guidelines',
      content: `
- Use try-catch blocks appropriately
- Create custom error classes
- Provide meaningful error messages
- Log errors with proper context
- Handle async errors with try-await-catch
- Implement proper error boundaries
- Never swallow errors silently`
    }
  ],
  references: [
    'https://www.joyent.com/node-js/production/design/errors',
    'https://www.martinfowler.com/articles/replaceThrowWithNotification.html'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Error Handling Team',
    url: 'https://www.joyent.com/'
  },
  isActive: true
};