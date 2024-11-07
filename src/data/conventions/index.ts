import { Convention } from '../../types';

// Import all conventions
import { astroConvention } from './astro';
import { typescriptConvention } from './typescript';
import { bootstrapConvention } from './bootstrap';
import { djangoConvention } from './django';
import { dotnetConvention } from './dotnet';
import { autohotkeyConvention } from './autohotkey';
import { 
  codeOrganizationConvention,
  namingConvention,
  documentationConvention,
  errorHandlingConvention
} from './general';
import {
  pythonConvention,
  sqlConvention,
  javascriptConvention
} from './languages';
import { reactConvention } from './frameworks';

// Group conventions by type
export const conventions: Record<string, Convention[]> = {
  general: [
    codeOrganizationConvention,
    namingConvention,
    documentationConvention,
    errorHandlingConvention
  ],
  language: [
    typescriptConvention,
    autohotkeyConvention,
    pythonConvention,
    sqlConvention,
    javascriptConvention
  ],
  framework: [
    astroConvention,
    bootstrapConvention,
    djangoConvention,
    dotnetConvention,
    reactConvention
  ],
  custom: []
};

// Export all conventions as a flat array
export const allConventions = Object.values(conventions).flat();