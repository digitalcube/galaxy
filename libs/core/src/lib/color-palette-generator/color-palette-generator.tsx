import Color from 'color';

/* eslint-disable-next-line */
export interface ColorPaletteGeneratorProps {
  colorsList?: string[];
  givenColor?: string;
  colorsAmount?: number;
  mixColor?: string;
  colorsShiftAmount?: number;
  rotate?: number;
  saturation?: number;
  step?: number;
}

const primaryColor = '#892885';

export const colorsList = ['#ff6600'];

export function colorPaletteGenerator({
  colorsAmount = 10,
  rotate = 10,
  givenColor = primaryColor,
  saturation = 10,
  mixColor = '',
  colorsShiftAmount = 50,
  colorsList = [],
}: ColorPaletteGeneratorProps) {
  for (let step = 0; step < colorsAmount; step++) {
    colorsList.push(
      Color(givenColor)
        .rotate(((step + 1) / colorsAmount) * -rotate)
        .saturate(((step + 1) / colorsAmount) * (saturation / 100))
        .mix(
          Color(mixColor),
          ((colorsShiftAmount / 100) * (step + 1)) / colorsAmount
        )
        .hex()
    );
  }

  return colorsList;
}

export default colorPaletteGenerator;
