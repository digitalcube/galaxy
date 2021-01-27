import React, { FC, ReactNode } from 'react';
import { Container, Grid, Heading, Content, Link } from '@galaxy/core';

export type HeroProps = {
  title?: string;
  img?: ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
};

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  img,
  href,
  buttonLabel,
}) => {
  return (
    <Container
      size="4"
      sx={{
        px: '5%',
        py: 5,
      }}
    >
      <Grid columns={[1, null, null, null, 2]}>
        <Content>
          <Heading
            sx={{
              fontSize: [7, null, null, 8],
            }}
            size="8"
          >
            <b>{title}</b>
          </Heading>
          <Heading size="4">{subtitle}</Heading>
          <Link kind="primary" href={href}>
            {buttonLabel}
          </Link>
        </Content>
        <div>{img}</div>
      </Grid>
    </Container>
  );
};
