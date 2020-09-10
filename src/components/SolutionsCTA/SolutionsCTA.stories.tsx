import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { SolutionsCTA, Image, Post, Button } from '../index';

export default {
  component: SolutionsCTA,
  title: `Containers/SolutionsCTA`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

// const title = `Solutions`;
// const subtitle = `Discover how Shifter empowers every type of business.`;

const solutionsCTA = {
  title: `Solutions`,
  subtitle: `Discover how Shifter empowers every type of business.`,
  solutionsLinks: [
    {
      children: `hello world`,
      href: '/hello-world',
    },
    {
      children: `hola mundo`,
      href: '/hola-mundo',
    },
  ],
  solutionsShowcase: [
    {
      node: (
        <Post
          content={{
            title: `data.showcaseSpeakMachine.title`,
            subtitle: `data.showcaseSpeakMachine.excerpt`,
            img: (
              <Image>
                <img alt="" src="//placehold.it/100x70" />
              </Image>
            ),
          }}
          footer={
            <Button outline kind="primary" href={`#`}>
              View Showcase
            </Button>
          }
        />
      ),
    },
    {
      node: (
        <Post
          content={{
            title: `data.showcaseSpeakMachine.title`,
            subtitle: `data.showcaseSpeakMachine.excerpt`,
            img: (
              <Image>
                <img alt="" src="//placehold.it/100x70" />
              </Image>
            ),
          }}
          footer={
            <Button outline kind="primary" href={`#`}>
              View Showcase
            </Button>
          }
        />
      ),
    },
  ],
};

export const Default = () => {
  return <SolutionsCTA {...solutionsCTA} />;
};
