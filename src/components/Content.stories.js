// src/components/Deploy.stories.js
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/components/v3/artifacts/Item.tsx
// https://github.com/megumiteam/shifter-dashboard/blob/master/src/types/artifacts.ts

import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Content } from "./Content"
import moment from "moment"

export default {
  component: Content,
  title: `Components/Content`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const contentData = {
  title: `Title`,
  img: `https://picsum.photos/400/300`,
  href: `https://duckduckgo.com/`,
  date: moment().subtract(3, `days`),
  author: `Ford Perfect`,
}

export const Default = () => <Content content={{ ...contentData }} />
