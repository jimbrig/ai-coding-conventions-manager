import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import GuidelineCard from './components/GuidelineCard';
import SettingsModal from './components/SettingsModal';
import PromptModal from './components/PromptModal';
import { Convention } from './types';
import { conventions } from './data/conventions';
import { Plus } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<'general' | 'language' | 'framework' | 'custom'>('general');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [generatedContent, setGeneratedContent] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const handleEdit = (convention: Convention) => {
    console.log('Edit convention:', convention);
  };

  const handleGuidelinesGenerated = (content: string) => {
    setGeneratedContent(content);
  };

  const currentConventions = conventions[selectedCategory] || [];

  const convertSectionsToContent = (sections: Convention['sections']) => {
    return sections.map(section => `## ${section.title}\n${section.content}`).join('\n\n');
  };

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
          <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Conventions
          </h2>
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            <Plus className="h-5 w-5" />
            <span>Add New</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {currentConventions.map(convention => (
            <GuidelineCard
              key={convention.id}
              guideline={{
                id: convention.id,
                title: convention.title,
                description: convention.description,
                category: convention.type,
                tags: convention.tags,
                content: convertSectionsToContent(convention.sections),
                isActive: convention.isActive
              }}
              onToggle={() => {}} // Implement toggle functionality if needed
              onEdit={() => handleEdit(convention)}
              isDark={isDark}
            />
          ))}
        </div>
      </main>

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        guidelines={[]} // Update with proper conversion of conventions to guidelines
        onImport={() => {}} // Implement import functionality if needed
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