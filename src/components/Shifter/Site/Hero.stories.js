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

export const Default = () => (
  <Hero
    content={{
      title: `The static site generator for WordPress sites.`,
      subtitle: `Using Shifter, create or migrate WordPress sites in minutes that are scalable, secure from attacks, and 100% static with no security or caching plugins required.`,
      buttonLabel: `Start a free trial`,
      buttonFooter: `No credit card Required`,
    }}
  />
)
