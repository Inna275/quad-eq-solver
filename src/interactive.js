import { isValidNumber, isZero } from './validation.js';
import { showEquation, showRoots } from './resultsPrinter.js';

const askFor = async (rl, prompt, checkZero = false) => {
  while (true) {
    let input = await rl.question(`${prompt} = `);

    if (!isValidNumber(input)) continue;

    const value = parseFloat(input);

    if (checkZero && isZero(value, prompt)) continue;

    return value;
  }
};

const interactiveMode = async (rl) => {
  const a = await askFor(rl, 'a', true);
  const b = await askFor(rl, 'b');
  const c = await askFor(rl, 'c');

  showEquation(a, b, c);
  showRoots(a, b, c);
};

export { interactiveMode };
