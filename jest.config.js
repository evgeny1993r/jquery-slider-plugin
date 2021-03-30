module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  // moduleNameMapper: {
  //   '\\.(css|scss)$': 'babel-jest',
  // },
};
