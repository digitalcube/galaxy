// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <Button  />;
};