import React from 'react';
import { Box } from 'theme-ui';
import { Content } from '../../../components/Content';
import { Link } from '../../../components/Link';
import { Heading } from '../../../components/Heading';
import { Container } from '../../../components/Container';
import { GetStarted } from '../GetStarted';

export default function Default({
  title,
  subtitle,
  href,
  linkLabel,
}: GetStarted) {
  return (
    <Box
      sx={{
        bg: 'primary',
      }}
    >
      <Container
        sx={{
          py: 5,
        }}
        size="3"
        as="section"
      >
        <Content>
          <Heading size="6">{title}</Heading>
          <Heading size="5">{subtitle}</Heading>
          <Link href={href} kind="white">
            {linkLabel}
          </Link>
        </Content>
      </Container>
    </Box>
  );
}

Default.defaultProps = GetStarted;
