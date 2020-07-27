import React from "react"
import { withKnobs } from "@storybook/addon-knobs/react"
import { Button } from "./Button"

export default {
  component: Button,
  title: `Components/Button`,
  decorators: [
    withKnobs,
    (story) => <div style={{ padding: `3rem` }}>{story()}</div>,
  ],
  excludeStories: /.*Data$/,
}

export const buttonContentData = {
  label: `Don't Panic.`,
  href: `https://galaxy.digitalcube.jp`,
}

export const Default = () => <Button content={buttonContentData} />
