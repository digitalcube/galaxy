import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Hero } from "./Hero"

export default {
  component: Hero,
  title: `Components/Shifter/Site/Hero`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const Default = () => <Hero />
