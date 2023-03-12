module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  coverageReporters: ["lcov", "json"]
}