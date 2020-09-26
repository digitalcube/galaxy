import React, { FC, ReactNode } from 'react';
import {
  Text,
  Card,
  Heading,
  Link,
  Content,
  PlanMeta,
  NavLink,
} from '../index';

export type Plan = {
  author?: string;
  category?: string;
  date?: string;
  excerpt?: string;
  footer?: ReactNode;
  href?: string;
  img?: string;
  node?: any;
  subtitle?: string;
  title?: string;
  sx?: object;
  children?: ReactNode;
  planMeta?: NavLink[];
};

export const Plan: FC<Plan> = ({
  category,
  excerpt,
  footer,
  href,
  img,
  subtitle,
  title,
  sx,
  children,
  planMeta,
}: Plan) => {
  return (
    <Card
      sx={{ ...sx }}
      variant="primary"
      align="center"
      img={img}
      footer={footer}
    >
      <Content
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          '& > :not(:first-child)': {
            mt: 1,
            mb: 0,
          },
        }}
      >
        <Heading as="p">{category}</Heading>
        <Link href={href}>
          <Heading as="h2" size="5">
            <b>{title}</b>
          </Heading>
        </Link>
        <Heading as="h3" size="2">
          {subtitle}
        </Heading>
        <Text>{excerpt}</Text>
        <PlanMeta nodes={planMeta} />
        {children ? children : null}
      </Content>
    </Card>
  );
};

Plan.defaultProps = {
  img: 'pricing-plan-icon-1.png',
  title: `Free`,
  href: `#!`,
};
