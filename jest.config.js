module.exports = {
  displayName: 'contol-panel',
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', 'cobertura'],
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '@latitude55/components': '<rootDir>/components',
    '@latitude55/theme': '<rootDir>/theme',
    '@latitude55/libs': '<rootDir>/libs',
  },
  coverageThreshold: {
    global: {
      statements: 92.22,
      branches: 90.9,
      functions: 90.9,
      lines: 92.04,
    },
  },
};
