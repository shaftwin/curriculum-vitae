const path = require('path');

module.exports = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom'],
  moduleDirectories: [path.resolve(__dirname, '../../'), 'node_modules'],
  setupFiles: [
    './configs/jest/mock.js',
    './configs/cucumber/jest-cucumber-config.js',
  ],
  snapshotSerializers: ['@emotion/jest/serializer'],
};
