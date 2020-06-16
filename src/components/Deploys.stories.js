// src/components/DeployList.stories.js

import React from "react";
import DeployList from "./DeployList";
import { Card } from "./Card";
import { actionsData } from "./Deploy.stories";

import { defaultDeploysData } from "./DeployList.stories";

export default {
  component: Card,
  title: "Containers/Deploys",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const Default = () => (
  <Card title='Deploys'>
    <DeployList deploys={defaultDeploysData} {...actionsData} />
  </Card>
);

export const Loading = () => (
  <DeployList loading deploys={[]} {...actionsData} />
);

export const Empty = () => <DeployList deploys={[]} {...actionsData} />;
