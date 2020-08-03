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
    title: `Announcing the Shifter Gatsby Recipe`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/9bd23ebe24a5532a4dd714bd9fb1afaa/79f20/BlogPost-gatsby-recipe.jpg"
      />
    ),
  },
  {
    ...postData,
    id: `2`,
    title: `Scheduled Publishing is now available on Shifter Static`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/467f0273b44a0424ee4fecee85fb39d3/79f20/BlogPost-scheduledpublish.jpg"
      />
    ),
  },
  {
    ...postData,
    id: `3`,
    title: `Shifter Media CDN Is Now Out of Beta`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/13ee57de35ffed5a3bde32aa05da99e9/79f20/WCblog-backups.jpg"
      />
    ),
  },
  {
    ...postData,
    id: `4`,
    title: `Using Shifter Headless with Gridsome and AWS Amplify`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/2902f1abacb62522fbf45bfd5c5babdd/24a5b/blog-feature-statcVheadless.png"
      />
    ),
  },
  {
    ...postData,
    id: `5`,
    title: `Using Shifter Static Automatic WordPress backups.`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/a35bfe08fe0e6b55f4fba66d07edd30e/79f20/Blog-PickupPhilly.jpg"
      />
    ),
  },
  {
    ...postData,
    id: `6`,
    title: `Using AWS Amplify with Gatsby and Shifter Headless`,
    img: (
      <img
        alt=""
        src="https://www.getshifter.io/static/de14a3e65b495a55b6e7811ff3c80209/24a5b/BlogFeature_HeadlessPlan.png"
      />
    ),
  },
]

export const Default = () => <PostList content={postListData} />
