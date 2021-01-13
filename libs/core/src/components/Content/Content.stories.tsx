import React from 'react';

import { Content } from './Content';

import { defaultStorybookConfig } from '../../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Content,
  title: `Galaxy/Components/Content`,
};

export const Centered = () => (
  <Content align="center">
    <h4>
      Eiusmod laborum nulla elit Lorem nisi nisi officia est cupidatat. Commodo
      magna magna esse voluptate consectetur aliquip proident nulla consectetur
      nulla culpa aliquip exercitation. In velit velit do consectetur aute. Esse
      id consequat aute magna.
    </h4>

    <p>
      Non adipisicing non deserunt esse. Eu aliqua deserunt incididunt irure
      officia adipisicing adipisicing excepteur irure non aliqua fugiat
      exercitation laborum. Pariatur proident nulla tempor ea. Dolore dolor aute
      officia id laborum duis amet ea ut ex sint nostrud. Deserunt labore aute
      officia duis aliquip non cupidatat aliquip occaecat minim.
    </p>

    <p>
      Cillum consequat exercitation eu ea enim culpa magna nostrud id ipsum
      eiusmod eu est. Exercitation exercitation quis irure adipisicing sit
      laborum do officia qui non ad consequat magna. Quis ullamco irure laboris
      ullamco eiusmod mollit sunt velit reprehenderit deserunt minim occaecat
      aliqua.
    </p>
  </Content>
);

export const Default = () => (
  <Content>
    <h4>
      Eiusmod laborum nulla elit Lorem nisi nisi officia est cupidatat. Commodo
      magna magna esse voluptate consectetur aliquip proident nulla consectetur
      nulla culpa aliquip exercitation. In velit velit do consectetur aute. Esse
      id consequat aute magna.
    </h4>

    <p>
      Non adipisicing non deserunt esse. Eu aliqua deserunt incididunt irure
      officia adipisicing adipisicing excepteur irure non aliqua fugiat
      exercitation laborum. Pariatur proident nulla tempor ea. Dolore dolor aute
      officia id laborum duis amet ea ut ex sint nostrud. Deserunt labore aute
      officia duis aliquip non cupidatat aliquip occaecat minim.
    </p>

    <p>
      Cillum consequat exercitation eu ea enim culpa magna nostrud id ipsum
      eiusmod eu est. Exercitation exercitation quis irure adipisicing sit
      laborum do officia qui non ad consequat magna. Quis ullamco irure laboris
      ullamco eiusmod mollit sunt velit reprehenderit deserunt minim occaecat
      aliqua.
    </p>
  </Content>
);
