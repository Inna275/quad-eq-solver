const getDiscriminant = (a, b, c) => b * b - 4 * a * c;

const calculateTwoRoots = (discriminant, a, b) => {
  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return [x1, x2];
};

const calculateOneRoot = (a, b) => -b / (2 * a);

const getRoots = (discriminant, a, b) => {
  if (discriminant > 0) {
    return calculateTwoRoots(discriminant, a, b);
  } else if (discriminant === 0) {
    return [calculateOneRoot(a, b)];
  }

  return [];
};

const solve = (a, b, c) => {
  const discriminant = getDiscriminant(a, b, c);
  return getRoots(discriminant, a, b);
};
