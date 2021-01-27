import React, { FC } from 'react';
import { AspectRatio as ThemeUIAspectRatio } from 'theme-ui';
import { Image, Text, Heading, Content } from '@galaxy/core';

export type TeamMemberProps = {
  excerpt?: string;
  img?: string;
  subtitle?: string;
  title?: string;
};

export const TeamMember: FC<TeamMemberProps> = ({
  excerpt,
  img,
  subtitle,
  title,
}) => {
  return (
    <Content
      sx={{
        '& > :not(:first-child)': {
          mt: 1,
          mb: 0,
        },
      }}
    >
      <ThemeUIAspectRatio
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        ratio={1}
      >
        <Image img={img} />
      </ThemeUIAspectRatio>
      <Heading as="h2" size="5">
        <b>{title}</b>
      </Heading>
      <Heading as="h3" size="2">
        {subtitle}
      </Heading>
      <Text>{excerpt}</Text>
    </Content>
  );
};
