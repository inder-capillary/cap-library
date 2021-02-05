module.exports = {
  rootDir: '../../',
  verbose: true,
  moduleFileExtensions: ['js'],
  testURL: 'http://localhost/',
  moduleDirectories: ['node_modules', 'app'],
  testResultsProcessor: 'jest-sonar-reporter',
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: '<rootDir>/config/jest/enzyme-setup.js',
  collectCoverageFrom: [
    '**/components/**/index.js',
    '**/components/*.{js,jsx}',
    '**/containers/**/index.js',
  ],
  clearMocks: true,
  resetMocks: true,
  globals: {
    NODE_ENV: 'test',
  },
  transformIgnorePatterns: ['node_modules/(?!(@capillarytech' + ')/)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
