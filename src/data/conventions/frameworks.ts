import { Convention } from '../../types';

export const reactConvention: Convention = {
  id: 'react-best-practices',
  title: 'React Best Practices',
  description: 'Standard conventions for React development',
  type: 'framework',
  category: 'Frontend Frameworks',
  tags: ['react', 'frontend', 'components'],
  sections: [
    {
      title: 'Component Development',
      content: `
- Use functional components with hooks
- Follow the Single Responsibility Principle
- Implement proper error boundaries
- Use meaningful component names
- Maintain consistent file structure`
    },
    {
      title: 'State Management',
      content: `
- Use React hooks effectively
- Implement proper state management
- Use context for shared state
- Follow immutability principles
- Optimize re-renders`
    }
  ],
  references: [
    'https://reactjs.org/docs/getting-started.html',
    'https://beta.reactjs.org/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'React Team',
    url: 'https://reactjs.org/'
  },
  isActive: true
};