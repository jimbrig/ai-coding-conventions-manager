import { Convention } from '../../types';

export const bootstrapConvention: Convention = {
  id: 'bootstrap-conventions',
  title: 'Bootstrap Development Standards',
  description: 'Best practices for building responsive web applications with Bootstrap',
  type: 'framework',
  category: 'Frontend Frameworks',
  tags: ['bootstrap', 'html', 'css', 'web', 'responsive', 'ui'],
  sections: [
    {
      title: 'Key Principles',
      content: `
- Write clear, concise, and technical responses with precise Bootstrap examples
- Utilize Bootstrap's components and utilities to streamline development
- Prioritize maintainability and readability in HTML and CSS
- Use descriptive class names and structure for clarity`
    },
    {
      title: 'Component Usage',
      content: `
- Leverage Bootstrap's grid system for responsive layouts
- Use container, row, and column classes to structure content
- Utilize Bootstrap components (buttons, modals, alerts) for enhanced UX
- Apply utility classes for quick styling adjustments
- Ensure all components are accessible with ARIA attributes`
    },
    {
      title: 'Form Handling',
      content: `
- Implement form validation using Bootstrap's built-in styles
- Use Bootstrap's alert component for error messages
- Structure forms with appropriate labels and placeholders
- Add proper feedback for form validation states`
    },
    {
      title: 'Customization',
      content: `
- Customize Bootstrap's Sass variables and mixins for unique themes
- Utilize responsive utilities for different screen sizes
- Keep custom styles minimal; prefer Bootstrap classes
- Follow Bootstrap's documentation for component behavior`
    },
    {
      title: 'Performance',
      content: `
- Minimize file sizes by including only necessary components
- Use CDN for Bootstrap resources when appropriate
- Optimize images and assets for mobile users
- Implement proper caching strategies`
    },
    {
      title: 'Accessibility',
      content: `
- Use semantic HTML elements
- Implement proper ARIA attributes
- Ensure keyboard navigation support
- Test with screen readers
- Follow WCAG guidelines`
    }
  ],
  references: [
    'https://getbootstrap.com/docs/',
    'https://blog.getbootstrap.com/',
    'https://github.com/twbs/bootstrap'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Christian Radev',
    url: 'https://github.com/hkrd/',
    avatar: 'https://avatars.githubusercontent.com/u/22638257?v=4'
  },
  isActive: true
};