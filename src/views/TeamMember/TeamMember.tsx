import React, { FC, ReactNode } from 'react';
import { AspectRatio as ThemeUIAspectRatio } from 'theme-ui';
import { Image } from '../../components/Image';
import { Text } from '../../components/Text';
import { Heading } from '../../components/Heading';
import { Content } from '../../components/Content';

export type TeamMember = {
  align?: `left` | `center` | `right`;
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
  variant?: string;
  sx?: object;
};

export const TeamMember: FC<TeamMember> = ({
  excerpt,
  img,
  subtitle,
  title,
}: TeamMember) => {
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

TeamMember.defaultProps = {
  title: `Magna fugiat`,
  subtitle: `XXX`,
  img: `//placehold.it/500`,
};
