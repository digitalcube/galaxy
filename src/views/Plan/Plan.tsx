import React, { FC, ReactNode } from 'react';
import { Text } from '../../components/Text';
import { Card } from '../Card';
import { Heading } from '../../components/Heading';
import { Link } from '../../components/Link';
import { Content } from '../../components/Content';
import { PlanMeta } from '../PlanMeta';
import { NavLink } from '../../components/NavLink';

export type Plan = {
  author?: string;
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
  price?: any;
};

export const Plan: FC<Plan> = ({
  excerpt,
  footer,
  href,
  img,
  subtitle,
  title,
  sx,
  children,
  planMeta,
  price,
}: Plan) => {
  console.log(price);
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
          textAlign: 'center',
          flexDirection: 'column',
          '& > :not(:first-child)': {
            mt: 1,
            mb: 0,
          },
        }}
      >
        <Link href={href}>
          <Heading as="h2" size="5">
            <b>{title}</b>
          </Heading>
        </Link>
        <Heading as="h3" size="2">
          {subtitle}
        </Heading>
        <Text>{excerpt}</Text>
        <PlanMeta price={price} nodes={planMeta} />
        {children ? children : null}
      </Content>
    </Card>
  );
};

Plan.defaultProps = {
  img: 'pricing-plan-icon-1.png',
  title: `Free`,
  href: `#!`,
  price: {
    year: `$1`,
    month: `$1`,
  },
};
