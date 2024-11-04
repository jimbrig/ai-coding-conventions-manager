export interface Guideline {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'language' | 'framework' | 'custom';
  tags: string[];
  content: string;
  isActive: boolean;
}

export interface Category {
  id: 'general' | 'language' | 'framework' | 'custom';
  label: string;
  description: string;
  icon: string;
}

export interface OutputFormat {
  id: 'markdown' | 'json' | 'text';
  label: string;
  description: string;
}