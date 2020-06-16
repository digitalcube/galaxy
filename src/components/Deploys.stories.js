// src/components/DeployList.stories.js

import React from "react";
import Deploys from "./Deploys";

import { defaultDeploysData } from "./DeployList.stories";

export default {
  component: Deploys,
  title: "Components/Deploys",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const Default = () => <Deploys deploys={defaultDeploysData} />;

export const Loading = () => <Deploys loading deploys={[]} />;

export const Empty = () => <Deploys deploys={[]} />;
