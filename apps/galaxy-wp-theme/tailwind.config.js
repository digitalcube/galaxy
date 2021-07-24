const { appRootPath } = require('@nrwl/workspace/src/utils/app-root');
const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require(`${appRootPath}/tailwind-workspace-preset.js`)],
  purge: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
