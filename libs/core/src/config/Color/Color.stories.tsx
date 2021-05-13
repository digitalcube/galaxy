import React from 'react';
import { colors } from './tailwind.config.js';
import Swatch from './Swatch';
import { defaultStorybookConfig } from '../../.storybook/docs';

export default {
  ...defaultStorybookConfig,
  component: Swatch,
  title: `Galaxy/Config/Color`,
};

// Todo: Move to utils or find similar package
const itemCounter = (array, item) =>
  array.flat(Infinity).filter((currentItem) => currentItem === item).length;

// Look for `-` in color tokens to find schemas
const colorTokens = Object.keys(colors).map((color) => {
  return color.match(/[^-]*/i)[0];
});

// Filter schemas by removing duplicates and orphaned tokens
const schemas = [
  ...new Set(
    colorTokens.map((token) => {
      return itemCounter(colorTokens, token) > 1 ? token : null;
    })
  ),
];

const schemaColors = (schema, colors) => {
  return Object.entries(colors).map((color) => {
    const token = color[0];
    const value = color[1];
    if (schema !== token.match(/[^-]*/i)[0]) return null;
    return <Swatch variant={`${token}`} value={`${value}`} />;
  });
};

export const Schemas = () => {
  return schemas.map((schema) => {
    return (
      <div>
        <div className="text-size-9">{schema}</div>
        {schemaColors(schema, colors)}
      </div>
    );
  });
};
