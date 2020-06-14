// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { withKnobs } from "@storybook/addon-knobs/react";

import Card from "./Card";
import DeployList from "./DeployList";
import { defaultDeploysData } from "./DeployList.stories";

export default {
  component: Card,
  title: "Deploys",
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Card title={`Deploys`}>
    <DeployList deploys={defaultDeploysData} />
  </Card>
);
