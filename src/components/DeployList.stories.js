// src/components/DeployList.stories.js

import React from "react";

import DeployList from "./DeployList";
import { deployData, actionsData } from "./Deploy.stories";

export default {
  component: DeployList,
  title: "DeployList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultDeploysData = [
  { ...deployData, id: "1", state: "DEPLOY_BUILDING" },
  { ...deployData, id: "2", state: "DEPLOY_PUBLISHED" },
  { ...deployData, id: "3", state: "DEPLOY_FAILED", title: "Don't Panic."  },
  {
    ...deployData,
    id: "4",
    title: "I'd far rather be happy than right any day.",
  },
  {
    ...deployData,
    id: "5",
    title: "Time is an illusion. Lunchtime doubly so.",
  },
  { ...deployData, id: "6", title: "Is there any tea on this spaceship?" },
];

export const Default = () => (
  <DeployList deploys={defaultDeploysData} {...actionsData} />
);

export const Loading = () => (
  <DeployList loading deploys={[]} {...actionsData} />
);

export const Empty = () => <DeployList deploys={[]} {...actionsData} />;
