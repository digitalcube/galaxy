// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { Card } from "./Card";

export default {
  component: Card,
  title: "Components/Card",
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Card />;
};

export const Title = () => {
  return <Card title='Title' />;
};

export const Subtitle = () => {
  return <Card title='Title' subtitle='Subtitle' />;
};

export const Body = () => {
  return (
    <Card title='Title' subtitle='Subtitle'>
      Body
    </Card>
  );
};

export const Footer = () => {
  return (
    <Card title='Title' subtitle='Subtitle' footer="Footer">
      Body
    </Card>
  );
};

export const Action = () => {
  return (
    <Card title='Title' subtitle='Subtitle' footer="Footer" action="Action">
      Body
    </Card>
  );
};
