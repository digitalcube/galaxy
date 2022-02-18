const path = require('path');

module.exports = async ({ config, mode }) => {
  // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    (f) => f.test.toString() !== '/\\.css$/'
  );

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader', 'postcss-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
