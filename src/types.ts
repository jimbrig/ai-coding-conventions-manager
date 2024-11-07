// Convention Types
export interface ConventionSection {
  title: string;
  content: string;
}

export interface ConventionAuthor {
  name: string;
  url?: string;
  avatar?: string;
}

export interface Convention {
  id: string;
  title: string;
  description: string;
  type: 'general' | 'language' | 'framework' | 'custom';
  category: string;
  tags: string[];
  sections: ConventionSection[];
  references?: string[];
  createdAt: string;
  updatedAt: string;
  author: ConventionAuthor;
  isActive: boolean;
}

// Legacy Guideline Type (for backward compatibility)
export interface Guideline {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'language' | 'framework' | 'custom';
  tags: string[];
  content: string;
  isActive: boolean;
}