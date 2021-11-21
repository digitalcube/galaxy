module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};
