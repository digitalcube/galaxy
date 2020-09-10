import React from 'react';
import { Grid } from '../index';

export type NodeList = {
  display?: `flex` | `grid`;
  justifyContent?: string;
  nodes?: Node[];
  xxs?: number | string;
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
  xxl?: number | string;
};

export type Node = {
  node: Object;
};

const nodeList = ({ nodes = [] }: NodeList) => {
  if (!nodes) return;
  const i = nodes.map((node: Node) => {
    console.log(node.node);
    return node.node;
  });

  return i;
};

export const NodeList = ({
  display,
  justifyContent,
  nodes = [],
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: NodeList) => {
  return (
    <Grid
      justifyContent={justifyContent}
      display={display}
      xxs={xxs}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      xxl={xxl}
    >
      {nodeList({ nodes: nodes })}
    </Grid>
  );
};
