import React, { useState } from 'react';
import { Wand2, X, FileCode2, Github, Terminal, FileDown, Loader2 } from 'lucide-react';
import { generateGuidelines } from '../utils/generateGuidelines';
import { OutputFormat } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onGuidelinesGenerated: (guidelines: string) => void;
  isDark: boolean;
}

const outputFormats: OutputFormat[] = [
  { 
    id: 'markdown', 
    label: 'CONVENTIONS.md', 
    description: 'Standard markdown documentation',
    icon: FileCode2
  },
  { 
    id: 'copilot', 
    label: 'GitHub Copilot', 
    description: 'Copilot-specific instructions',
    icon: Github
  },
  { 
    id: 'cursor', 
    label: 'Cursor IDE', 
    description: 'Cursor AI rules and preferences',
    icon: Terminal
  }
];

export default function PromptModal({ isOpen, onClose, onGuidelinesGenerated, isDark }: Props) {
  const [prompt, setPrompt] = useState('');
  const [format, setFormat] = useState<OutputFormat['id']>('markdown');
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const guidelines = await generateGuidelines(prompt, format);
      onGuidelinesGenerated(guidelines);
      onClose();
    } catch (error) {
      console.error('Error generating guidelines:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl w-full max-w-2xl p-6 m-4`}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <Wand2 className={`h-6 w-6 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Generate AI Guidelines
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 ${
              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            } rounded-full transition-colors`}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label 
              htmlFor="prompt" 
              className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}
            >
              Describe your tech stack and requirements
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Generate coding guidelines for a React Native mobile app with TypeScript and Firebase, focusing on code organization, naming conventions, and testing practices."
              className={`w-full px-4 py-3 rounded-lg border ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              rows={4}
            />
          </div>

          <div>
            <label 
              className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-3`}
            >
              Output Format
            </label>
            <div className="grid grid-cols-3 gap-4">
              {outputFormats.map((outputFormat) => {
                const Icon = outputFormat.icon;
                return (
                  <button
                    key={outputFormat.id}
                    onClick={() => setFormat(outputFormat.id)}
                    className={`p-4 rounded-lg border transition-all ${
                      format === outputFormat.id
                        ? isDark
                          ? 'bg-indigo-900 border-indigo-700 text-indigo-300'
                          : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        : isDark
                          ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5 mx-auto mb-2" />
                    <span className="text-sm font-medium block">{outputFormat.label}</span>
                    <span className={`text-xs block mt-1 ${
                      isDark ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {outputFormat.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg ${
                isDark
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-colors`}
            >
              Cancel
            </button>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                isGenerating || !prompt.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white transition-colors`}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <Wand2 className="h-5 w-5" />
                  <span>Generate</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}