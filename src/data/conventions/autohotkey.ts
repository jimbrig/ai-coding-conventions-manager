import { Convention } from '../../types';

export const autohotkeyConvention: Convention = {
  id: 'autohotkey-conventions',
  title: 'AutoHotkey Development Standards',
  description: 'Best practices for writing efficient and maintainable AutoHotkey scripts',
  type: 'language',
  category: 'Scripting Languages',
  tags: ['autohotkey', 'automation', 'windows', 'scripting'],
  sections: [
    {
      title: 'Key Principles',
      content: `
- Write concise, easy-to-understand AutoHotkey v2 code
- Prefer API approaches over mouse/keyboard simulation
- Use clear, descriptive variable names
- Keep scripts modular and maintainable
- Follow consistent formatting standards`
    },
    {
      title: 'Script Structure',
      content: `
Required script headers:
- #Requires AutoHotkey v2.0.2+
- #SingleInstance Force
- DetectHiddenWindows true
- ListLines True
- SetWorkingDir A_InitialWorkingDir

Standard hotkeys:
- ^+e::Edit (Control+Shift+E)
- ^+Escape::Exitapp
- ^+r::Reload`
    },
    {
      title: 'Naming Conventions',
      content: `
- Use camelCase for variables and functions
- Names should be 5-25 characters long
- Names should clearly indicate purpose
- Avoid abbreviations unless common
- Use descriptive function parameters`
    },
    {
      title: 'Code Organization',
      content: `
- Place function definitions at end of script
- Group related functionality together
- Use proper indentation and spacing
- Follow One True Brace style
- Keep functions focused and small`
    },
    {
      title: 'Best Practices',
      content: `
- Avoid external dependencies
- Implement your own functions
- Use proper error handling
- Add inline documentation
- Prefer simpler, clearer solutions
- Use proper window handling`
    },
    {
      title: 'Documentation',
      content: `
- Add clear comments for complex logic
- Document function parameters
- Explain script purpose and usage
- Include usage examples
- Document any assumptions`
    }
  ],
  references: [
    'https://www.autohotkey.com/docs/v2/',
    'https://www.autohotkey.com/boards/',
    'https://the-automator.com/'
  ],
  createdAt: '2024-03-19T00:00:00.000Z',
  updatedAt: '2024-03-19T00:00:00.000Z',
  author: {
    name: 'the-Automator',
    url: 'https://the-Automator.com',
    avatar: 'https://www.the-automator.com/download/img/logo/the-Automator_100.png'
  },
  isActive: true
};