module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['packages/*/src/**/*.{js,ts}', '!**/node_modules/**'],
  coverageReporters: ['text', 'lcov', 'json'],
  transformIgnorePatterns: [],
};
