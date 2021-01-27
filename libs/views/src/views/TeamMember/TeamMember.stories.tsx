import React from 'react';

import { TeamMember, TeamMemberProps } from './TeamMember';

import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: TeamMember,
  title: `Galaxy/Views/Team/TeamMember`,
};

const props: TeamMemberProps = {
  title: `Magna fugiat`,
  subtitle: `XXX`,
  img: `post-featured-image.png`,
};
export const Default = () => <TeamMember {...props} />;
