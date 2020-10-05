import React, { ReactNode } from 'react';
import { useThemeUI } from 'theme-ui';
import { Box } from '../Box';

type Shape = {
  children?: ReactNode;
  shape?: string;
  color?: string;
};

const Triangle = ({ color }: Shape) => {
  return (
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
          <stop offset="0" stopColor={color} />
          <stop offset="0.36" stopColor={color} stopOpacity="0.6" />
          <stop offset="0.67" stopColor={color} stopOpacity="0.27" />
          <stop offset="0.89" stopColor={color} stopOpacity="0.08" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path fill="url(#triangle)" d="M17.18 0L0 20.47 36.73 16.41 17.18 0z" />
    </svg>
  );
};

const Square = ({ color }: Shape) => {
  return (
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
          <stop offset="0" stopColor={color} />
          <stop offset="0.36" stopColor={color} stopOpacity="0.6" />
          <stop offset="0.67" stopColor={color} stopOpacity="0.27" />
          <stop offset="0.89" stopColor={color} stopOpacity="0.08" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        fill="url(#square)"
        d="M556.51 378.98H582.64V405.08000000000004H556.51z"
        transform="rotate(-60 -30.345 682.76)"
      />
    </svg>
  );
};

const SemiCircle = ({ color }: Shape) => {
  return (
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
          <stop offset="0" stopColor={color} stopOpacity="0" />
          <stop offset="1" stopColor={color} />
        </linearGradient>
      </defs>
      <path
        fill="url(#semi-circle)"
        d="M593.2 392.7l39.46-39.45a27.9 27.9 0 11-39.46 39.45z"
        transform="translate(-593.2 -353.25)"
      />
    </svg>
  );
};

const Shapes: React.FC<Shape> = ({ shape = `square`, color }) => {
  switch (shape) {
    case 'square':
      return <Square color={color} />;
    case 'semi-circle':
      return <SemiCircle color={color} />;
    case 'triangle':
      return <Triangle color={color} />;
    default:
      return null;
  }
};

export const Shape: React.FC<Shape> = ({ shape = `square`, children }) => {
  const context = useThemeUI();
  const { theme } = context;
  const color = theme?.colors?.primary;
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ zIndex: '0', position: 'relative' }}>{children}</Box>
      <Box
        sx={{
          top: '-5%',
          opacity: '0.075',
          position: 'absolute',
          width: '100%',
          zIndex: '-2',
          left: 0,
          right: 0,
          '& > *': {
            zIndex: '-1',
            width: '50%',
            display: 'block',
            margin: '0 auto',
          },
        }}
      >
        <Shapes color={color} shape={shape} />
      </Box>
    </Box>
  );
};
