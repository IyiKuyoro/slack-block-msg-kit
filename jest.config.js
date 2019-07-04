// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  automock: false, // All imported modules in your tests should be mocked automatically
  browser: false,
  clearMocks: true, // Automatically clear mock calls and instances between every test
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/index.ts',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage', // The directory where Jest should output its coverage files
  coveragePathIgnorePatterns: [
    '<rootDir>/src/database/*',
    '\\\\node_modules\\\\',
  ], // An array of regexp pattern strings used to skip coverage collection
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
    'text-summary',
  ], // A list of reporter names that Jest uses when writing coverage reports
  dependencyExtractor: null, // A path to a custom dependency extractor
  moduleDirectories: [
    'node_modules',
  ],
  resetMocks: true, // Automatically reset mock state between every test
  testEnvironment: 'node', // The test environment that will be used for testing
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ], // The glob patterns Jest uses to detect test files
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  verbose: true, // Indicates whether each individual test should be reported during the run
};
