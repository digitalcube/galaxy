// .storybook/preview.js
import React from "react"
import { addDecorator } from "@storybook/react"
import { withContexts } from "@storybook/addon-contexts/react"
import { createGlobalStyle } from "styled-components"
import { GlobalStyle } from "./../src/styles/index"
import { contexts } from "./contexts"

addDecorator(withContexts(contexts))
addDecorator((storyFn) => (
  <div>
    <GlobalStyle />
    {storyFn()}
  </div>
))
