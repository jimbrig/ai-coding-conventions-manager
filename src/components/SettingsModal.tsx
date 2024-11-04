import React from 'react';
import { X, Download, Upload, Moon, Sun } from 'lucide-react';
import { Guideline } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  guidelines: Guideline[];
  onImport: (guidelines: Guideline[]) => void;
  isDark: boolean;
  onThemeChange: () => void;
}

export default function SettingsModal({ isOpen, onClose, guidelines, onImport, isDark, onThemeChange }: Props) {
  if (!isOpen) return null;

  const handleExport = () => {
    const dataStr = JSON.stringify(guidelines, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'coding-guidelines.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string);
        onImport(imported);
      } catch (error) {
        console.error('Error importing guidelines:', error);
        alert('Invalid file format. Please upload a valid JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 m-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="font-medium">Theme</span>
            </div>
            <button
              onClick={onThemeChange}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Download className="h-5 w-5" />
                <span className="font-medium">Export Guidelines</span>
              </div>
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Export
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Upload className="h-5 w-5" />
                <span className="font-medium">Import Guidelines</span>
              </div>
              <label className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer">
                Import
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}