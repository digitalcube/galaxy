import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Heading } from "../components/Heading"

export default {
  component: Heading,
  title: `Components/Heading`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const headingData = {
  title: `“I could calculate your chance of survival, but you won’t like it.” –Marvin`,
}

export const Default = () => <Heading content={headingData} />
