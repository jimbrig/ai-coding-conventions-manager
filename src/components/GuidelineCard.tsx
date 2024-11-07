import React from 'react';
import { Guideline } from '../types';
import {
  Code2,
  BookOpen,
  Bug,
  Folder,
  Languages,
  Puzzle,
  FileCode,
  Terminal,
  Database,
  Brain,
  Globe,
  Layout,
  Server,
  Blocks,
  FileJson,
  Hash
} from 'lucide-react';

interface Props {
  guideline: Guideline;
  onToggle: (id: string) => void;
  onEdit: (guideline: Guideline) => void;
  isDark: boolean;
}

const getGuidelineIcon = (tags: string[]) => {
  // Framework icons
  if (tags.includes('astro')) return Globe;
  if (tags.includes('react')) return Blocks;
  if (tags.includes('bootstrap')) return Layout;
  if (tags.includes('django')) return Server;
  if (tags.includes('.net')) return Hash;
  
  // Language icons
  if (tags.includes('typescript')) return FileJson;
  if (tags.includes('python')) return Terminal;
  if (tags.includes('sql') || tags.includes('postgresql')) return Database;
  if (tags.includes('mysql')) return Database;
  if (tags.includes('javascript')) return FileCode;
  if (tags.includes('node')) return Server;
  
  // General category icons
  if (tags.includes('organization')) return Folder;
  if (tags.includes('documentation')) return BookOpen;
  if (tags.includes('errors')) return Bug;
  if (tags.includes('conventions')) return Languages;
  if (tags.includes('framework')) return Puzzle;
  if (tags.includes('ai')) return Brain;
  
  // Default icon
  return Code2;
};

const getTagColor = (tag: string, isDark: boolean) => {
  const colors: Record<string, { bg: string; text: string }> = {
    typescript: { 
      bg: isDark ? 'bg-blue-900' : 'bg-blue-100', 
      text: isDark ? 'text-blue-300' : 'text-blue-700' 
    },
    javascript: { 
      bg: isDark ? 'bg-yellow-900' : 'bg-yellow-100', 
      text: isDark ? 'text-yellow-300' : 'text-yellow-700' 
    },
    python: { 
      bg: isDark ? 'bg-green-900' : 'bg-green-100', 
      text: isDark ? 'text-green-300' : 'text-green-700' 
    },
    react: { 
      bg: isDark ? 'bg-cyan-900' : 'bg-cyan-100', 
      text: isDark ? 'text-cyan-300' : 'text-cyan-700' 
    },
    astro: { 
      bg: isDark ? 'bg-purple-900' : 'bg-purple-100', 
      text: isDark ? 'text-purple-300' : 'text-purple-700' 
    },
    bootstrap: { 
      bg: isDark ? 'bg-violet-900' : 'bg-violet-100', 
      text: isDark ? 'text-violet-300' : 'text-violet-700' 
    },
    django: { 
      bg: isDark ? 'bg-emerald-900' : 'bg-emerald-100', 
      text: isDark ? 'text-emerald-300' : 'text-emerald-700' 
    },
    '.net': { 
      bg: isDark ? 'bg-indigo-900' : 'bg-indigo-100', 
      text: isDark ? 'text-indigo-300' : 'text-indigo-700' 
    }
  };

  return colors[tag] || { 
    bg: isDark ? 'bg-gray-800' : 'bg-gray-100', 
    text: isDark ? 'text-gray-300' : 'text-gray-700' 
  };
};

export default function GuidelineCard({ guideline, onToggle, onEdit, isDark }: Props) {
  const Icon = getGuidelineIcon(guideline.tags);

  return (
    <div 
      className={`${
        isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
      } rounded-xl shadow-md transition-all duration-200 hover:shadow-lg border ${
        isDark ? 'border-gray-700' : 'border-gray-100'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start space-x-4">
            <div className={`p-3 rounded-xl ${
              isDark 
                ? 'bg-gradient-to-br from-indigo-900 to-purple-900 text-indigo-300' 
                : 'bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-600'
            } flex items-center justify-center`}>
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                {guideline.title}
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {guideline.description}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {guideline.tags.map((tag) => {
              const { bg, text } = getTagColor(tag, isDark);
              return (
                <span
                  key={tag}
                  className={`px-3 py-1 text-sm font-medium rounded-full ${bg} ${text}`}
                >
                  {tag}
                </span>
              );
            })}
          </div>

          <div className={`mt-4 p-4 rounded-lg ${
            isDark ? 'bg-gray-900/50' : 'bg-gray-50'
          }`}>
            <pre className={`text-sm whitespace-pre-wrap font-mono ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {guideline.content}
            </pre>
          </div>
        </div>
      </div>

      <div className={`px-6 py-4 border-t ${
        isDark ? 'border-gray-700' : 'border-gray-100'
      } flex justify-end space-x-2`}>
        <button
          onClick={() => onEdit(guideline)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-400' 
              : 'hover:bg-gray-100 text-gray-600'
          }`}
        >
          Edit
        </button>
        <button
          onClick={() => onToggle(guideline.id)}
          className={`px-4 py-2 rounded-lg transition-colors ${
            guideline.isActive
              ? isDark 
                ? 'bg-green-900 text-green-300 hover:bg-green-800' 
                : 'bg-green-100 text-green-700 hover:bg-green-200'
              : isDark 
                ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {guideline.isActive ? 'Active' : 'Inactive'}
        </button>
      </div>
    </div>
  );
}