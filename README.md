# quad-eq-solver

A simple console app to solve quadratic equations.

## How to run
1. Make sure you have [Node.js](https://nodejs.org/) installed on your machine
2. Clone the repo:
  ```bash
  git clone https://github.com/Inna275/quad-eq-solver.git
  ```
3. Navigate to the project folder:
  ```bash
  cd quad-eq-solver
  ```
### Interactive mode
Run without arguments to enter coefficients manually:
  ```bash
  node main.js
  ```

### Non-interactive(file) mode
Provide a file with three space-separated numbers (a, b, c) followed by a newline (\n) to solve an equation:
  ```bash
  2 1 -3
  ```

To run the application in non-interactive mode, use the following command:
  ```bash
  node main.js path/to/your/file
  ```

[Revert commit](https://github.com/Inna275/quad-eq-solver/commit/e2701b3a5b857823da9f036c986b79ef1350afd3)
