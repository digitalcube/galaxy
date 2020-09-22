import React, { FC, ReactNode } from 'react';
import { Card as ThemeUICard } from 'theme-ui';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { CardFooter } from './CardFooter';
import { CardBody } from './CardBody';

export type Card = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
  schema?: 'amimoto' | 'shifter' | 'galaxy';
  img?: ReactNode;
  title?: string;
  subtitle?: ReactNode;
  excerpt?: string;
  href?: string;
  footer?: React.ReactChild;
};

export const Card: FC<Card> = ({
  title,
  subtitle,
  excerpt,
  href,
  img,
  children,
  footer,
}: Card) => {
  return (
    <ThemeUICard>
      <CardImage>{img}</CardImage>
      <CardHeader
        href={href}
        title={title}
        subtitle={subtitle}
        excerpt={excerpt}
      />
      <CardBody>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </ThemeUICard>
  );
};
