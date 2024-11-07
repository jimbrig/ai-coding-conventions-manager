import { Guideline } from '../types';
import { allConventions } from './conventions';

// Convert all conventions to guidelines format
export const initialGuidelines: Guideline[] = allConventions.map(convention => ({
  id: convention.id,
  title: convention.title,
  description: convention.description,
  category: convention.type,
  tags: convention.tags,
  content: convention.sections.map(section => 
    `## ${section.title}\n${section.content}`
  ).join('\n\n'),
  isActive: convention.isActive
}));