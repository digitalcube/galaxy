import React from 'react';
import { Section, Heading, PostList, ColorSwatchProps } from '@galaxy/core';
import { colorPalette } from './color-palette.galaxy';

/* eslint-disable-next-line */
export interface ColorPaletteProps {
  title?: string;
  colors: any | ColorSwatchProps[];
  token: string;
  namespace: string;
}

export function ColorPalette(props: ColorPaletteProps) {
  const { colors } = props;

  const posts = colors.map((color: ColorSwatchProps, i: number) => {
    const scale = i < 1 ? i : 1 + i;
    return {
      title: `primary-${scale}`,
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
