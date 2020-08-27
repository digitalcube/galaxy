import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles';

type Shape = {
  children?: string;
  shape?: string;
};

const StyledShape = styled.div`
  top: -5%;
  opacity: 0.35;
  position: absolute;
  width: 100%;
  z-index: 0;

  > * {
    width: 40%;
    display: block;
    margin: 0 auto;
  }
`;

const Triangle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="triangle"
    viewBox="0 0 36.73 20.47"
  >
    <defs>
      <linearGradient
        id="triangle"
        x1="509.9"
        x2="535.42"
        y1="383.97"
        y2="383.97"
        gradientTransform="rotate(39.6 779.152 -491.273)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={colors.shifter.magenta.primary} />
        <stop
          offset="0.36"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.6"
        />
        <stop
          offset="0.67"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.27"
        />
        <stop
          offset="0.89"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.08"
        />
        <stop
          offset="1"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0"
        />
      </linearGradient>
    </defs>
    <path fill="url(#triangle)" d="M17.18 0L0 20.47 36.73 16.41 17.18 0z" />
  </svg>
);

const Square = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="square"
    viewBox="0 0 35.67 35.68"
  >
    <defs>
      <linearGradient
        id="square"
        x1="569.57"
        x2="569.57"
        y1="377.8"
        y2="405.7"
        gradientTransform="rotate(90 569.575 392.025)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor={colors.shifter.magenta.primary} />
        <stop
          offset="0.36"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.6"
        />
        <stop
          offset="0.67"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.27"
        />
        <stop
          offset="0.89"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0.08"
        />
        <stop
          offset="1"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0"
        />
      </linearGradient>
    </defs>
    <path
      fill="url(#square)"
      d="M556.51 378.98H582.64V405.08000000000004H556.51z"
      transform="rotate(-60 -30.345 682.76)"
    />
  </svg>
);

const SemiCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="semi-circle"
    viewBox="0 0 48 48"
  >
    <defs>
      <linearGradient
        id="semi-circle"
        x1="686.53"
        x2="742.33"
        y1="232.64"
        y2="232.64"
        gradientTransform="rotate(-45 849.955 418.347)"
        gradientUnits="userSpaceOnUse"
      >
        <stop
          offset="0"
          stopColor={colors.shifter.magenta.primary}
          stopOpacity="0"
        />
        <stop offset="1" stopColor={colors.shifter.magenta.primary} />
      </linearGradient>
    </defs>
    <path
      fill="url(#semi-circle)"
      d="M593.2 392.7l39.46-39.45a27.9 27.9 0 11-39.46 39.45z"
      transform="translate(-593.2 -353.25)"
    />
  </svg>
);

const Shapes: React.FC<Shape> = ({ shape = `square` }) => {
  switch (shape) {
    case 'square':
      return <Square />;
    case 'semi-circle':
      return <SemiCircle />;
    case 'triangle':
      return <Triangle />;
    default:
      return null;
  }
};

export const Shape: React.FC<Shape> = ({ shape = `square` }) => {
  return (
    <StyledShape>
      <Shapes shape={shape} />
    </StyledShape>
  );
};
