import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { TeamMember, TeamMemberProps } from './TeamMember';

export default {
  component: TeamMember,
  title: `Galaxy/Views/Team/TeamMember`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const props: TeamMemberProps = {
  title: `Magna fugiat`,
  subtitle: `XXX`,
  img:`post-featured-image.png`

}
export const Default = () => <TeamMember {...props} />;
