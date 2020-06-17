// src/components/ContentList.stories.js

import React from "react"

import ContentList from "./ContentList"
import { contentData, actionsData } from "./Content.stories"

export default {
  component: ContentList,
  title: `Components/Content List`,
  decorators: [(story) => <div style={{ padding: `3rem` }}>{story()}</div>],
  excludeStories: /.*Data$/,
}

export const defaultDeploysData = [
  { ...contentData, id: `1`, title: `Content title` },
  { ...contentData, id: `2`, title: `Another content title` },
  { ...contentData, id: `3`, title: `Don't Panic.` },
  {
    ...contentData,
    id: `4`,
    title: `I'd far rather be happy than right any day`,
  },
  {
    ...contentData,
    id: `5`,
    title: `Time is an illusion. Lunchtime doubly so`,
  },
  { ...contentData, id: `6`, title: `Is there any tea on this spaceship?` },
]

export const Default = () => (
  <ContentList content={defaultDeploysData} {...actionsData} />
)

export const Loading = () => (
  <ContentList loading content={[]} {...actionsData} />
)

export const Empty = () => <ContentList content={[]} {...actionsData} />
