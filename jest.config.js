/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom", // Mimics browser environment for React components "jsdom/node"
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Use Babel for transpiling files
  },
  moduleNameMapper: {
    "^.+\\.(css|scss|less|jpg|jpeg|png|gif|svg)$": "jest-transform-stub", // Mock static assets
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"], // Don't transform files in node_modules
  testMatch: [
    "<rootDir>/src/**/*.test.js",
    "<rootDir>/src/**/*.test.jsx",
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/src/**/*.test.tsx",
  ],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"], //required for running jest dom assertions
};
