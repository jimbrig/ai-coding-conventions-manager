import { Convention } from '../../types';

export const pythonConvention: Convention = {
  id: 'python-guidelines',
  title: 'Python Coding Standards',
  description: 'PEP 8 and best practices for Python development',
  type: 'language',
  category: 'Programming Languages',
  tags: ['python', 'pep8', 'formatting'],
  sections: [
    {
      title: 'Style Guide',
      content: `
- Follow PEP 8 style guide
- Use snake_case for functions and variables
- Use PascalCase for class names
- Maximum line length of 79 characters
- Use type hints for function arguments and return values
- Use docstrings for modules, classes, and functions`
    },
    {
      title: 'Best Practices',
      content: `
- Use virtual environments for project dependencies
- Prefer list comprehensions over map/filter when readable
- Use context managers (with statements) for resource management
- Import order: standard library, third-party, local application
- Use f-strings for string formatting
- Implement proper exception handling with specific exceptions`
    }
  ],
  references: [
    'https://www.python.org/dev/peps/pep-0008/',
    'https://docs.python.org/3/tutorial/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Python Team',
    url: 'https://www.python.org/'
  },
  isActive: true
};

export const sqlConvention: Convention = {
  id: 'sql-guidelines',
  title: 'SQL Best Practices',
  description: 'Standards for writing efficient and maintainable SQL',
  type: 'language',
  category: 'Query Languages',
  tags: ['sql', 'database', 'queries'],
  sections: [
    {
      title: 'Query Writing',
      content: `
- Use UPPERCASE for SQL keywords
- Use meaningful table and column names
- Include appropriate indexing strategies
- Write one keyword per line for complex queries
- Use proper table aliases in JOINs
- Avoid SELECT *`
    },
    {
      title: 'Best Practices',
      content: `
- Use parameterized queries to prevent SQL injection
- Include appropriate WHERE clauses
- Use appropriate data types for columns
- Implement proper transaction management
- Document complex queries
- Use appropriate constraints (PRIMARY KEY, FOREIGN KEY, etc.)
- Optimize queries for performance
- Use appropriate normalization forms`
    }
  ],
  references: [
    'https://www.sqlite.org/docs.html',
    'https://dev.mysql.com/doc/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Database Team',
    url: 'https://www.sqlite.org/'
  },
  isActive: true
};

export const javascriptConvention: Convention = {
  id: 'javascript-guidelines',
  title: 'JavaScript Best Practices',
  description: 'Modern JavaScript development standards',
  type: 'language',
  category: 'Programming Languages',
  tags: ['javascript', 'es6+', 'web'],
  sections: [
    {
      title: 'Language Features',
      content: `
- Use const and let, avoid var
- Use arrow functions for callbacks
- Implement proper Promise handling
- Use async/await for asynchronous operations
- Use template literals for string interpolation`
    },
    {
      title: 'Best Practices',
      content: `
- Implement proper error handling
- Use destructuring assignment
- Use spread/rest operators appropriately
- Use modules for code organization
- Implement proper memory management
- Use appropriate data structures
- Follow proper event handling practices
- Use appropriate security measures
- Implement proper testing strategies`
    }
  ],
  references: [
    'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    'https://javascript.info/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'JavaScript Team',
    url: 'https://developer.mozilla.org/'
  },
  isActive: true
};