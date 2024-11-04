import React from 'react';
import { Guideline } from '../types';
import { Check, X, Edit, Code2, Terminal, Database, BrainCircuit, FileCode2, Server, Layout, Globe } from 'lucide-react';

interface Props {
  guideline: Guideline;
  onToggle: (id: string) => void;
  onEdit: (guideline: Guideline) => void;
  isDark: boolean;
}

const getGuidelineIcon = (tags: string[]) => {
  if (tags.includes('python')) return Terminal;
  if (tags.includes('sql') || tags.includes('postgresql')) return Database;
  if (tags.includes('r')) return BrainCircuit;
  if (tags.includes('javascript') || tags.includes('typescript')) return FileCode2;
  if (tags.includes('powershell')) return Terminal;
  if (tags.includes('fastapi') || tags.includes('plumber')) return Server;
  if (tags.includes('shiny')) return Layout;
  if (tags.includes('react')) return Globe;
  return Code2;
};

export default function GuidelineCard({ guideline, onToggle, onEdit, isDark }: Props) {
  const Icon = getGuidelineIcon(guideline.tags);

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 transition-all hover:shadow-lg`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-start space-x-3">
          <div className={`p-2 ${isDark ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-600'} rounded-lg`}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{guideline.title}</h3>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{guideline.description}</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(guideline)}
            className={`p-2 ${isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'} rounded-full transition-colors`}
          >
            <Edit className="h-4 w-4" />
          </button>
          <button
            onClick={() => onToggle(guideline.id)}
            className={`p-2 rounded-full transition-colors ${
              guideline.isActive
                ? isDark ? 'bg-green-900 text-green-400 hover:bg-green-800' : 'bg-green-100 text-green-600 hover:bg-green-200'
                : isDark ? 'bg-gray-700 text-gray-400 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {guideline.isActive ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {guideline.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-1 text-xs rounded-full ${
                isDark ? 'bg-indigo-900 text-indigo-400' : 'bg-indigo-100 text-indigo-700'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <pre className={`mt-4 p-4 ${
          isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'
        } rounded-md text-sm whitespace-pre-wrap`}>
          {guideline.content}
        </pre>
      </div>
    </div>
  );
}