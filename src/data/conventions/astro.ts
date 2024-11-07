import { Convention } from '../../types';

export const astroConvention: Convention = {
  id: 'astro-conventions',
  title: 'Astro Development Standards',
  description: 'Comprehensive guidelines for building scalable web applications with Astro',
  type: 'framework',
  category: 'Frontend Frameworks',
  tags: ['astro', 'javascript', 'typescript', 'web', 'static-site', 'ssr'],
  sections: [
    {
      title: 'Key Principles',
      content: `
- Write concise, technical responses with accurate Astro examples
- Leverage Astro's partial hydration and multi-framework support effectively
- Prioritize static generation and minimal JavaScript for optimal performance
- Use descriptive variable names and follow Astro's naming conventions
- Organize files using Astro's file-based routing system`
    },
    {
      title: 'Project Structure',
      content: `
Use the recommended Astro project structure:
- src/
  - components/
  - layouts/
  - pages/
  - styles/
- public/
- astro.config.mjs`
    },
    {
      title: 'Component Development',
      content: `
- Create .astro files for Astro components
- Use framework-specific components (React, Vue, Svelte) when necessary
- Implement proper component composition and reusability
- Use Astro's component props for data passing
- Leverage Astro's built-in components like <Markdown /> when appropriate`
    },
    {
      title: 'Performance Optimization',
      content: `
- Minimize use of client-side JavaScript; leverage Astro's static generation
- Use the client:* directives judiciously for partial hydration:
  - client:load for immediately needed interactivity
  - client:idle for non-critical interactivity
  - client:visible for components that should hydrate when visible
- Implement proper lazy loading for images and other assets
- Utilize Astro's built-in asset optimization features`
    },
    {
      title: 'Testing',
      content: `
- Implement unit tests for utility functions and helpers
- Use end-to-end testing tools like Cypress for testing the built site
- Implement visual regression testing if applicable`
    },
    {
      title: 'Security',
      content: `
- Follow security best practices for web applications
- Implement proper CSP headers
- Use environment variables for sensitive data
- Validate and sanitize user input`
    }
  ],
  references: [
    'https://docs.astro.build',
    'https://astro.build/blog',
    'https://github.com/withastro/astro'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'Mathieu de Gouville',
    url: 'https://x.com/matdegouville',
    avatar: 'https://pbs.twimg.com/profile_images/1812958242428866560/OohbxOG5_400x400.jpg'
  },
  isActive: true
};