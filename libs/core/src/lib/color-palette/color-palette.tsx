import React from 'react';
import {
  Section,
  Heading,
  PostList,
  ColorSwatchProps,
  colorPaletteGenerator,
} from '@galaxy/core';

/* eslint-disable-next-line */
export interface ColorPaletteProps {
  title?: string;
  colors?: any | ColorSwatchProps[];
  color?: string;
  token?: string;
  namespace?: string;
}

const color = '#892885';

const darkColors = colorPaletteGenerator({
  colorsAmount: 4,
  saturation: 100,
  rotate: -13,
  colorsShiftAmount: 70,
  givenColor: color,
  mixColor: 'black',
})
  .reverse()
  .map((color: string) => color);

const lightColors = colorPaletteGenerator({
  colorsAmount: 4,
  saturation: 46,
  rotate: 13,
  colorsShiftAmount: 94,
  givenColor: color,
  mixColor: 'white',
}).map((color) => color);

const colorsList = [...darkColors, color, ...lightColors];

export function ColorPalette(props: ColorPaletteProps) {
  const { colors, token } = props;

  const posts = colors.map((color: any, i: number) => {
    const scale = i === 0 ? 50 : 100 * i; // 50, 100, 200, 300, etc.
    return {
      title: `${token}-${scale}`,
      hex: color,
    };
  });

  return (
    <Section className="bg-white">
      <Section className="bg-black px-12 pt-12 pb-8 flex justify-between items-center">
        <Heading className="text-white" text="Primary Colors" fontSize={7} />
        <Heading className="text-white" text="Galaxy" />
      </Section>
      <Section className="px-9 pt-14 space-y-12">
        <Heading
          fontSize={6}
          as="p"
          text="Primary colors are the main colors used in a design. This system
        utilizes a color scale for one primary color and one gray. The “500”
        number color is considered the primary brand color and most dominant
        color used in an interface."
        />
        <PostList schema="ColorPalette" posts={posts} />
      </Section>
    </Section>
  );
}

export default ColorPalette;

ColorPalette.defaultProps = {
  colors: colorsList,
};
