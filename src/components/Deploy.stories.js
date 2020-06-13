// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import moment from "moment";

import Deploy from "./Deploy";

export default {
  component: Deploy,
  title: "Deploy",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const deployData = {
  id: "1",
  title: "No deploy message",
  state: "DEPLOY_READY",
  start: moment(),
  stop: moment().subtract(99, 'seconds'),
};

export const actionsData = {
  onViewDeploy: action("onViewDeploy"),
};

export const Default = () => {
  return (
    <Deploy deploy={object("deploy", { ...deployData })} {...actionsData} />
  );
};

export const Building = () => (
  <Deploy deploy={{ ...deployData, state: "DEPLOY_BUILDING" }} {...actionsData} />
);

export const Published = () => (
  <Deploy deploy={{ ...deployData, state: "DEPLOY_PUBLISHED" }} {...actionsData} />
);

export const Failed = () => (
  <Deploy deploy={{ ...deployData, state: "DEPLOY_FAILED" }} {...actionsData} />
);

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = () => (
  <Deploy deploy={{ ...deployData, title: longTitleString }} {...actionsData} />
);
