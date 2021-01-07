import React from 'react';
import { Animation } from '@galaxy/core';
import { withKnobs } from '@storybook/addon-knobs';
import { Benefits, BenefitsProps } from './index';

export default {
  component: Benefits,
  title: `Galaxy/Views/Benefits`,
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

const props: BenefitsProps = {
  title: `Id Lorem aliquip`,
  subtitle: `Commodo culpa deserunt id magna esse. Et dolore elit nulla veniam in anim ut est.`,
  img: <Animation animation="singleClick" />,
  nodes: [
    {
      title: `Easy installation`,
      excerpt: `Create a new WordPress site right from the Shifter Dashboard, no uploading required.`,
    },
    {
      title: `Collaborate`,
      excerpt: `Work with others and share access to your Shifter account using our team features.`,
    },
    {
      title: `Maintenance-free`,
      excerpt: `Shifter manages WordPress core so you're always up to date and plugins never vulnerable.`,
    },
    {
      title: `No coding required`,
      excerpt: `Easy for non-developers to get started using WordPress themes or page builders.`,
    },
  ],
}


export const Defaults = () => <Benefits {...{
  title: props.title,
  nodes: props.nodes,
}}/>;
export const Overview = () => <Benefits {...props} />;
