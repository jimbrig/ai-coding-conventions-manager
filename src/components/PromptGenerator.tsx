import React, { useState } from 'react';
import { Wand2, FileDown, Loader2 } from 'lucide-react';
import { generateGuidelines } from '../utils/generateGuidelines';
import { OutputFormat } from '../types';

interface Props {
  onGuidelinesGenerated: (guidelines: string) => void;
  isDark: boolean;
}

const outputFormats: OutputFormat[] = [
  { id: 'markdown', label: 'Markdown', description: 'Generate guidelines in Markdown format' },
  { id: 'json', label: 'JSON', description: 'Generate guidelines as structured JSON' },
  { id: 'text', label: 'Plain Text', description: 'Generate guidelines as plain text' }
];

export default function PromptGenerator({ onGuidelinesGenerated, isDark }: Props) {
  const [prompt, setPrompt] = useState('');
  const [format, setFormat] = useState<OutputFormat['id']>('markdown');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    try {
      const guidelines = await generateGuidelines(prompt, format);
      onGuidelinesGenerated(guidelines);
    } catch (error) {
      console.error('Error generating guidelines:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6 mb-8`}>
      <div className="space-y-4">
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
            placeholder="e.g., Generate coding guidelines for a React Native mobile app with TypeScript and Firebase"
            className={`w-full px-4 py-3 rounded-lg border ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-400'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            rows={3}
          />
        </div>

        <div>
          <label 
            className={`block text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-2`}
          >
            Output Format
          </label>
          <div className="grid grid-cols-3 gap-4">
            {outputFormats.map((outputFormat) => (
              <button
                key={outputFormat.id}
                onClick={() => setFormat(outputFormat.id)}
                className={`p-3 rounded-lg border transition-all ${
                  format === outputFormat.id
                    ? isDark
                      ? 'bg-indigo-900 border-indigo-700 text-indigo-300'
                      : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    : isDark
                      ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-sm font-medium">{outputFormat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
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
                <span>Generate Guidelines</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}