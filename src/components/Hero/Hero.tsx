import React, { ReactNode } from 'react';
import { Container, Grid, Heading, Content, Animation, Link } from '../index';

export type Hero = {
  title?: string;
  img?: ReactNode;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
};

export const Hero: React.FC<Hero> = ({
  title,
  subtitle,
  img,
  href,
  buttonLabel,
}: Hero) => {
  return (
    <Container
      size="4"
      sx={{
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

Hero.defaultProps = {
  img: <Animation animation="dashboard" />,
  title: `In commodo id minim fugiat ex qui anim cupidatat reprehenderit.`,
  subtitle: `Laborum elit fugiat esse nisi eu magna est anim nisi officia deserunt eiusmod consequat voluptate eiusmod aliquip labore, id duis duis aliquip eiusmod.`,
  href: `#!`,
  buttonLabel: `Dolor aute exercitation`,
};
