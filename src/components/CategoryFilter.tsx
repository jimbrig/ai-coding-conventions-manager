import React from 'react';
import { Category } from '../types';
import { Code2, FileCode2, Box, Wrench } from 'lucide-react';

const categories: Category[] = [
  { id: 'general', label: 'General', description: 'Universal coding standards', icon: 'Code2' },
  { id: 'language', label: 'Languages', description: 'Language-specific guidelines', icon: 'FileCode2' },
  { id: 'framework', label: 'Frameworks', description: 'Framework conventions', icon: 'Box' },
  { id: 'custom', label: 'Custom', description: 'Your custom guidelines', icon: 'Wrench' },
];

const iconMap = {
  Code2,
  FileCode2,
  Box,
  Wrench,
};

interface Props {
  selected: Category['id'];
  onSelect: (id: Category['id']) => void;
}

export default function CategoryFilter({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => {
        const Icon = iconMap[category.icon as keyof typeof iconMap];
        return (
          <button
            key={category.id}
            onClick={() => onSelect(category.id)}
            className={`p-4 rounded-lg transition-all ${
              selected === category.id
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className="h-6 w-6 mb-2" />
            <h3 className="font-semibold">{category.label}</h3>
            <p className="text-sm opacity-80">{category.description}</p>
          </button>
        );
      })}
    </div>
  );
}