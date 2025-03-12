import { interactiveMode } from './src/interactive.js'
import { nonInteractiveMode } from './src/nonInteractive.js'
import { createInterface } from 'readline/promises';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

if (process.argv.length === 2) {
  await interactiveMode(rl);
} else if (process.argv.length === 3) {
  nonInteractiveMode();
}

rl.close();
