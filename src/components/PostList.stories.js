// src/components/PostList.stories.js

import React from "react"
import { PostList } from "./PostList"
import { postData } from "./Post.stories"

export default {
  component: PostList,
  title: `Components/Post List`,
  decorators: [(story) => <div style={{ padding: `3rem` }}>{story()}</div>],
  excludeStories: /.*Data$/,
}

export const postListData = [
  {
    ...postData,
    id: `1`,
    title: `New Article: The Role of Stable Value in Each Stage of the Savings Journey`,
  },
  {
    ...postData,
    id: `2`,
    title: `The State of Stable Value and its Evolving Role in Modern DC Plan Design
  `,
  },
  { ...postData, id: `3`, title: `401(k) investors flee to safety in 2020` },
  {
    ...postData,
    id: `4`,
    title: `Why ERISA Advisors Should (Really) Consider Stable Value Funds`,
  },
  {
    ...postData,
    id: `5`,
    title: `The Shock-Absorbing Retirement Fund`,
  },
  {
    ...postData,
    id: `6`,
    title: `Press Release: Stable Value Nets $50 Billion in Inflows Amid 1Q2020 Market Turbulence`,
  },
]

export const Default = () => <PostList content={postListData} />
