import React, { FC, ReactNode } from 'react';
import { Card } from '../Card';
import { Text, Heading, Link, Content, NavLinkProps } from '@galaxy/core';
import { PlanMeta } from '../PlanMeta';

export type PlanProps = {
  excerpt?: string;
  footer?: ReactNode;
  href?: string;
  img?: string;
  node?: any;
  subtitle?: string;
  title?: string;
  sx?: object;
  children?: ReactNode;
  buttonLabel?: string;
  planMeta?: NavLinkProps[];
  price?: any;
  detailsLabel?: string;
  detailsLink?: string;
};

export const Plan: FC<PlanProps> = ({
  excerpt,
  footer,
  href,
  img = 'pricing-plan-icon-1.png',
  subtitle,
  title,
  sx,
  children,
  planMeta,
  price,
  buttonLabel,
  detailsLink,
  detailsLabel,
}) => {
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
        <PlanMeta
          detailsLink={detailsLink}
          detailsLabel={detailsLabel}
          href={href}
          buttonLabel={buttonLabel}
          price={price}
          nodes={planMeta}
        />
        {children ? children : null}
      </Content>
    </Card>
  );
};