import { Convention } from '../../types';

export const djangoConvention: Convention = {
  id: 'django-conventions',
  title: 'Django Development Standards',
  description: 'Comprehensive guidelines for building scalable web applications with Django',
  type: 'framework',
  category: 'Backend Frameworks',
  tags: ['django', 'python', 'web', 'backend', 'orm'],
  sections: [
    {
      title: 'Key Principles',
      content: `
- Write clear, technical responses with precise Django examples
- Use Django's built-in features and tools effectively
- Follow Django's coding style guide (PEP 8 compliance)
- Use descriptive names for functions and variables
- Structure projects modularly using Django apps`
    },
    {
      title: 'Project Structure',
      content: `
- Organize code into focused Django apps
- Keep views lightweight and models focused
- Use proper URL patterns and namespacing
- Implement clear separation of concerns
- Follow the MVT (Model-View-Template) pattern`
    },
    {
      title: 'Database and Models',
      content: `
- Use Django's ORM effectively
- Implement proper model relationships
- Create efficient database queries
- Use migrations for schema changes
- Follow database normalization principles`
    },
    {
      title: 'Views and Templates',
      content: `
- Use class-based views for complex logic
- Keep function-based views simple
- Implement proper template inheritance
- Use context processors effectively
- Follow DRY principles in templates`
    },
    {
      title: 'Security',
      content: `
- Implement proper authentication
- Use Django's security middleware
- Follow OWASP security guidelines
- Protect against common vulnerabilities
- Use proper password hashing`
    },
    {
      title: 'Performance',
      content: `
- Optimize database queries
- Implement proper caching
- Use async views when appropriate
- Optimize static file handling
- Monitor and profile performance`
    }
  ],
  references: [
    'https://docs.djangoproject.com/',
    'https://www.django-rest-framework.org/',
    'https://docs.djangoproject.com/en/stable/topics/security/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Caio Barbieri',
    url: 'https://caio.lombello.com',
    avatar: 'https://pbs.twimg.com/profile_images/1825535338846015488/z1LjLlZQ_400x400.jpg'
  },
  isActive: true
};