import React from 'react';
import { Code2, Settings, Wand2 } from 'lucide-react';

interface Props {
  onSettingsClick: () => void;
  onGenerateClick: () => void;
}

export default function Header({ onSettingsClick, onGenerateClick }: Props) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Code2 className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">DevStyle Guide</h1>
              <p className="text-sm opacity-90">AI-Powered Coding Conventions Manager</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onGenerateClick}
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-lg transition-all shadow-lg hover:shadow-xl border border-white/20 hover:border-white/30"
            >
              <Wand2 className="h-5 w-5" />
              <span className="font-medium">Generate AI Guidelines</span>
            </button>
            
            <button 
              onClick={onSettingsClick}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}