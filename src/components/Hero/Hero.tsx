import React, { ReactNode } from 'react';
import { Container, Grid, Heading, Content, Animation, Link } from '../index';

type Hero = {
  title?: string;
  img?: ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
};

export const Hero: React.FC<Hero> = ({
  img = <Animation animation="dashboard" />,
  title = `Jamstack solutions for WordPress`,
  subtitle = `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
  href = `https://go.getshifter.io/register/`,
  buttonLabel = `Start a free trial`,
}: Hero) => {
  return (
    <Container
      size="4"
      sx={{
        py: 5,
      }}
    >
      <Grid columns={2}>
        <Content>
          <Heading size="7">
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
