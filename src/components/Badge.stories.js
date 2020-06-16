// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { Badge } from "./Badge";

export default {
  component: Badge,
  title: "Components/Badge",
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
};

export const Deploy = () => {
  return <Badge deploy={{ state: "DEPLOY_PUBLISHED" }} />;
};

export const Setting = () => {
  return (
    <>
      <Badge setting={{ state: "SETTING_AUTO_DEPLOY_ENABLED" }} />
      {` `}
      <Badge setting={{ state: "SETTING_AUTO_DEPLOY_DISABLED" }} />
      {` `}
      <Badge setting={{ state: "SETTING_CREATE_BACKUP_ENABLED" }} />
      {` `}
      <Badge setting={{ state: "SETTING_CREATE_BACKUP_DISABLED" }} />
    </>
  );
};
