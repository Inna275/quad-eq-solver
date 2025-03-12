import { readFileSync } from 'fs';
import { isZero, checkFileExists, isValidFileFormat } from './validation.js';
import { showEquation, showRoots } from './resultsPrinter.js';

const nonInteractiveMode = () => {
  const path = process.argv[2];
  checkFileExists(path);

  const data = readFileSync(path, 'utf-8');

  isValidFileFormat(data);

  const coefs = data.trim()
                    .split(' ')
                    .map((coef) => parseFloat(coef));

  if (isZero(coefs[0], 'a')) {
    process.exit(1);
  }

  showEquation(coefs[0], coefs[1], coefs[2]);
  showRoots(coefs[0], coefs[1], coefs[2]);
};

export { nonInteractiveMode };
