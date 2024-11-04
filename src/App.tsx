import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import GuidelineCard from './components/GuidelineCard';
import SettingsModal from './components/SettingsModal';
import PromptModal from './components/PromptModal';
import { Guideline } from './types';
import { initialGuidelines } from './data/initialGuidelines';
import { Plus } from 'lucide-react';

function App() {
  const [guidelines, setGuidelines] = useState<Guideline[]>(() => {
    const saved = localStorage.getItem('guidelines');
    return saved ? JSON.parse(saved) : initialGuidelines;
  });
  const [selectedCategory, setSelectedCategory] = useState<'general' | 'language' | 'framework' | 'custom'>('general');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('guidelines', JSON.stringify(guidelines));
  }, [guidelines]);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleGuideline = (id: string) => {
    setGuidelines(guidelines.map(g => 
      g.id === id ? { ...g, isActive: !g.isActive } : g
    ));
  };

  const handleEdit = (guideline: Guideline) => {
    // Implement edit functionality
    console.log('Edit guideline:', guideline);
  };

  const handleImport = (imported: Guideline[]) => {
    setGuidelines(imported);
    setIsSettingsOpen(false);
  };

  const handleGuidelinesGenerated = (content: string) => {
    setGeneratedContent(content);
  };

  const filteredGuidelines = guidelines.filter(g => g.category === selectedCategory);

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
        onSettingsClick={() => setIsSettingsOpen(true)} 
        onGenerateClick={() => setIsPromptOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <CategoryFilter 
            selected={selectedCategory}
            onSelect={(category) => setSelectedCategory(category)}
          />
        </div>

        {generatedContent && (
          <div className={`mb-8 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Generated Guidelines
            </h3>
            <pre className={`whitespace-pre-wrap ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {generatedContent}
            </pre>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Guidelines</h2>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Add New</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredGuidelines.map(guideline => (
            <GuidelineCard
              key={guideline.id}
              guideline={guideline}
              onToggle={toggleGuideline}
              onEdit={handleEdit}
              isDark={isDark}
            />
          ))}
        </div>
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        guidelines={guidelines}
        onImport={handleImport}
        isDark={isDark}
        onThemeChange={() => setIsDark(!isDark)}
      />

      <PromptModal
        isOpen={isPromptOpen}
        onClose={() => setIsPromptOpen(false)}
        onGuidelinesGenerated={handleGuidelinesGenerated}
        isDark={isDark}
      />
    </div>
  );
}

export default App;