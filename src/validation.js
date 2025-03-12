import { existsSync } from 'fs';

const isValidNumber = (input) => {
  const isValid = /^-?\d+(\.\d+)?$/.test(input);
  if (!isValid) {
    console.log(`Expected a valid real number, got ${input} instead`);
  }
  return isValid;
}

const isZero = (value, prompt) => {
  if (value === 0) {
    console.log(`${prompt} cannot be 0`);
    return true;
  }
  return false;
};

const checkFileExists = (path) => {
  if (!existsSync(path)) {
    console.log(`File ${path} does not exist`);
    process.exit(1);
  }
};

const isValidFileFormat = (data) => {
  const fileFormatRegex = /^-?\d+(\.\d+)?\s-?\d+(\.\d+)?\s-?\d+(\.\d+)?\n$/;
  
  if (!fileFormatRegex.test(data)) {
    console.log('Invalid file format');
    process.exit(1);
  }
};

export { 
  isValidNumber, 
  isZero, 
  checkFileExists, 
  isValidFileFormat 
};
