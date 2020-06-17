// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs/react";
import moment from "moment";

import { Deploy } from "./Deploy";

export default {
  component: Deploy,
  title: "Components/Deploy",
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

export const deployData = {
  id: "1",
  title: "No deploy message",
  state: "DEPLOY_READY",
  start: moment(),
  stop: moment().subtract(99, "seconds"),
};

export const actionsData = {
  onViewDeploy: action("onViewDeploy"),
};

export const Default = () => {
  return <Deploy deploy={deployData} {...actionsData} />;
};

export const Building = () => (
  <Deploy
    deploy={{ ...deployData, state: "DEPLOY_BUILDING" }}
    {...actionsData}
  />
);

export const Published = () => (
  <Deploy
    deploy={{ ...deployData, state: "DEPLOY_PUBLISHED" }}
    {...actionsData}
  />
);

export const Failed = () => (
  <Deploy deploy={{ ...deployData, state: "DEPLOY_FAILED" }} {...actionsData} />
);

const longTitleString = `Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.`;

export const LongTitle = () => (
  <Deploy deploy={{ ...deployData, title: longTitleString }} {...actionsData} />
);
