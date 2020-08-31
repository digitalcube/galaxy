import React from 'react';
import { Button, NodeList } from '../index';

type ButtonGroup = {
  buttons: Button[];
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

export const ButtonGroup: React.FC<ButtonGroup> = ({
  buttons,
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: ButtonGroup) => {
  const nodes = buttons.map((button, i) => {
    const { children, href } = button;
    return {
      node: (
        <Button href={href} outline key={i}>
          {children}
        </Button>
      ),
    };
  });
  return (
    <NodeList
      xxs={xxs}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
      nodes={nodes}
    />
  );
};
