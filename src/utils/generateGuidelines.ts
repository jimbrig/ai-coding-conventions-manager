import { OutputFormat } from '../types';

export async function generateGuidelines(prompt: string, format: OutputFormat['id']): Promise<string> {
  // This is a placeholder implementation
  // In a real application, this would make an API call to an AI service
  
  return new Promise((resolve) => {
    setTimeout(() => {
      const conventionsMd = `# Coding Guidelines for ${prompt}

## Project Structure
- Organize code by feature/module
- Keep components small and focused
- Use proper file naming conventions

## Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier
- Implement proper error handling

## Testing
- Write unit tests for business logic
- Implement integration tests
- Use proper testing utilities

## Documentation
- Document component props
- Add JSDoc comments
- Maintain a README`;

      const copilotInstructions = `// GitHub Copilot Instructions
// Project: ${prompt}

/**
 * CODING STANDARDS AND CONVENTIONS
 * 
 * File Organization:
 * - Group related functionality in modules
 * - Keep files focused and small
 * - Use consistent naming patterns
 * 
 * Code Style:
 * - Use TypeScript strict mode
 * - Prefer const over let
 * - Use early returns
 * - Implement proper error boundaries
 * 
 * Documentation:
 * - Use JSDoc for all public APIs
 * - Include usage examples
 * - Document edge cases
 */`;

      const cursorRules = `// Cursor AI Rules and Preferences
// Generated for: ${prompt}

{
  "language": {
    "typescript": {
      "strict": true,
      "preferConst": true,
      "maxLineLength": 80
    }
  },
  "style": {
    "indentation": "spaces",
    "spacing": 2,
    "quotes": "single"
  },
  "patterns": {
    "naming": {
      "components": "PascalCase",
      "functions": "camelCase",
      "constants": "UPPER_SNAKE_CASE"
    }
  },
  "preferences": {
    "imports": "named",
    "exports": "named",
    "errorHandling": "try-catch",
    "async": "async-await"
  }
}`;

      switch (format) {
        case 'copilot':
          resolve(copilotInstructions);
          break;
        case 'cursor':
          resolve(cursorRules);
          break;
        default:
          resolve(conventionsMd);
      }
    }, 1500); // Simulate API delay
  });
}