import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Title } from "../components/Title"

export default {
  component: Title,
  title: `Components/Title`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const titleData = {
  title: `The static site generator for WordPress.`,
}

export const Default = () => <Title content={{ ...titleData }} />
