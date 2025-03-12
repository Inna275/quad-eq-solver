const readline = require('readline/promises');
const { showEquation, showRoots } = require('./resultsPrinter.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isValidNumber = (input) => /^-?\d+(\.\d+)?$/.test(input);

const isZero = (value, prompt) => {
  if (value === 0) {
    console.log(`Error: ${prompt} cannot be 0`);
    return true;
  }
  return false;
};

const askFor = async (prompt, checkZero = false) => {
  while (true) {
    let input = await rl.question(`${prompt} = `);

    if (!isValidNumber(input)) {
      console.log(`Error: expected a valid real number, got ${input} instead`);
      continue;
    }

    const value = parseFloat(input);

    if (checkZero && isZero(value, prompt)) {
      continue;
    } 

    return value;
  }
};

const interactiveMode = async () => {
  const a = await askFor('a', true);
  const b = await askFor('b');
  const c = await askFor('c');

  showEquation(a, b, c);
  showRoots(a, b, c);

  rl.close();
};

module.exports = interactiveMode;
