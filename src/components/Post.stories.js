import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Post } from "./../components/Post"
import moment from "moment"

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
  title: `Announcing the Shifter Gatsby Recipe`,
  subtitle: `Our Shifter Gatsby Recipe focuses on solving the problem of getting started.`,
  excerpt: `If you want to create a Gatsby site using WordPress and deploy your site to something like Gatsby Cloud, you should be able to do that with just a few commands.`,
  date: moment().subtract(3, `days`),
  img: <img alt="" src="//placehold.it/600x400" />,
}

export const Default = () => <Post content={postData} />
