// src/components/DeployList.stories.js

import React from "react"
import { Tip } from "./Tip"

export default {
  component: Tip,
  title: `Components/Tip`,
  decorators: [(story) => <div style={{ padding: `3rem` }}>{story()}</div>],
  excludeStories: /.*Data$/,
}

export const Default = () => (
  <>
    <Tip label="Hello" tip="World" />
  </>
)

export const CustomID = () => (
  <>
    <Tip label="Custom" tip="ID" id="customId" />
  </>
)
