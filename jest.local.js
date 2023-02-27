module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testMatch: ['**/specs/**/index.spec.js'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './jest-html-report',
        filename: 'report.html',
      },
    ],
  ],
  globals: {
    testTimeout: 50000,
  },
  verbose: true,
};
