// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, object } from "@storybook/addon-knobs/react";
import moment from "moment";

import Card from "./Card";
import DeployList from "./DeployList";
import { defaultDeploysData } from "./DeployList.stories";

export default {
  component: Card,
  title: "Card",
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Card />;
};

export const DeploysCard = () => (
  <Card title={`Deploys`}>
    <DeployList deploys={defaultDeploysData} />
  </Card>
);
