const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(
  ...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)']
);
rootMain.core = { ...rootMain.core, builder: 'webpack5' };

rootMain.addons.push(...[rootMain.addons, '@nrwl/react/plugins/storybook']);

module.exports = rootMain;
