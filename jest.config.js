module.exports = {
  setupFiles: ['raf/polyfill', '<rootDir>/src/tests/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/src/tests/__mocks__/styleMock.js',
  },
};
