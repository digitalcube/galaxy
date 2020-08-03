module.exports = {
  stories: ["../src/components/**/*.stories.(js|ts|tsx)"],
  addons: [
    // "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-viewport/register",
    "@storybook/addon-contexts/register",
  ],
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
    })
    config.resolve.extensions.push(".ts", ".tsx")
    return config
  },
}