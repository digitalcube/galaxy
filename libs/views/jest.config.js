module.exports = {
  displayName: 'views',
  preset: '../../jest.preset.js',
  setupFiles: [
    // For lottie-web [start]
      'jest-canvas-mock',
      '../../jest.setup.js'
      // For lottie-web [end]
  ],
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/views',
};
