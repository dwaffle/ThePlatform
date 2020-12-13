# TypeScript Boilerplate

This boilerplate comes installed with the following packages:

- ESLint (Linting)
  - .eslintrc
  - .eslintignore

- Prettier (Code Formatting)
  - .prettierrc.json
  - .prettierignore

- Typescript Compiler
  - tsconfig.json

- Git Repository
  - .gitignore


## Installation Instructions

To install this package, please run: `npm install`

## Start Scripts

This package has 3 start scripts:

`npm run start`
- This script will run 
  - `node dist/index.js`

To run the linter and code formetter in report only mode
( NO changes will be made to your code ).

`npm run start:dev`
- This script will run:
  - `npm run build`
  - `npm run start`

To run the linter and code formatter in fix mode (changes WILL be made to your code):

`npm run start:dev:fix`
- This script will run:
  - `npm run build:fix`
  - `npm run start`

To skip linting and formatting:

`npm run start:dev:notest`
- This script will run:
  - `npm run build:compile`
  - `npm run start`

### Supporting Scripts

`npm run build`
  - `npm run build:lint`
  - `npm run build:prettier`
  - `npm run build:compile`

`npm run build:fix`
  - `npm run build:lint:fix`
  - `npm run build:prettier:fix`
  - `npm run build:compile`