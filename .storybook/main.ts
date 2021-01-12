module.exports = {
  stories: ['../libs/**/**/*.stories.@(ts|js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-contexts/register',
  ],
  babel: async (options) => {
    options.plugins.push(['@babel/plugin-transform-react-jsx']);
    return options;
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
