/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC, ReactNode } from 'react';
import { Card as ThemeUICard } from 'theme-ui';
import { CardHeader } from './CardHeader';
import { CardImage } from './CardImage';
import { CardFooter } from './CardFooter';
import { CardBody } from './CardBody';

export type Card = {
  children?: ReactNode;
  align?: `left` | `center` | `right`;
  schema?: 'amimoto' | 'shifter' | 'galaxy';
  img?: string;
  title?: string;
  subtitle?: ReactNode;
  excerpt?: string;
  href?: string;
  footer?: ReactNode;
  sx?: object;
  variant?: string;
};

export const Card: FC<Card> = ({
  title,
  subtitle,
  excerpt,
  href,
  img,
  children,
  footer,
  sx,
  variant,
}: Card) => {
  return (
    <ThemeUICard
      variant={variant}
      sx={{
        ...sx,
      }}
    >
      <CardImage img={img} />
      <CardHeader
        href={href}
        title={title}
        subtitle={subtitle}
        excerpt={excerpt}
        variant={variant}
      />
      <CardBody variant={variant}>{children}</CardBody>
      <CardFooter>{footer}</CardFooter>
    </ThemeUICard>
  );
};

Card.defaultProps = {
  variant: 'primary',
};
