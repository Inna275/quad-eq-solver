import { solve } from './algorithm.js';

const showEquation = (a, b, c) => {
  const equation = `(${a})x^2 + (${b})x + (${c}) = 0`;
  console.log(`Equation is: ${equation}`);
};

const showRoots = (a, b, c) => {
  const roots = solve(a, b, c);
  const n = roots.length;

  console.log(`There are ${n} roots`);

  if (n === 0) return;

  for (let i = 0; i < n; i++) {
    console.log(`x${i + 1} = ${roots[i]}`);
  }
};

export { showEquation, showRoots };