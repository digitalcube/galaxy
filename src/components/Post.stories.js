import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Post } from "./../components/Post"
// import moment from "moment"

export default {
  component: Post,
  title: `Components/Post`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const postData = {
  title: `Title`,
  subtitle: `Subtitle`,
  excerpt: `Excerpt`,
  date: `Date`,
  img: `Image`,
}

export const Default = () => <Post content={postData} />
