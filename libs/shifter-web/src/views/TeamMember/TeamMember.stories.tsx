import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TeamMember } from './TeamMember';

export default {
  component: TeamMember,
  title: `Galaxy/Views/Team/TeamMember`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const Default = () => <TeamMember />;
