import React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import { Post } from "././Post"
import moment from "moment"

export default {
  component: Post,
  title: `Components/Post`,
  decorators: [
    withKnobs,
    (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const postData = {
  title: `Announcing the Shifter Gatsby Recipe`,
  subtitle: `Our Shifter Gatsby Recipe focuses on solving the problem of getting started.`,
  excerpt: `If you want to create a Gatsby site using WordPress and deploy your site to something like Gatsby Cloud, you should be able to do that with just a few commands.`,
  date: moment().subtract(Math.floor(Math.random() * 10), `days`),
  author: `Daniel Olson`,
  img: (
    <img
      alt=""
      src="https://www.getshifter.io/static/40b93d70dfb59d815b49cebb13b97311/79f20/BlogPost-MediaCDNRelease.jpg"
    />
  ),
}

export const Default = () => <Post content={postData} />