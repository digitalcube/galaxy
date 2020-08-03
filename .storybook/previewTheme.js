// .storybook/preview.js
import React from "react"
import { addDecorator } from "@storybook/react"
import { withContexts } from "@storybook/addon-contexts/react"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from 'styled-theming';

import { GlobalStyle } from "./../src/styles/index"
import { contexts } from "./contexts"
import { themes, themeFunction } from "../src/styles"

addDecorator(withContexts(contexts))
addDecorator((storyFn) => (
  <div>
    {console.log(themeFunction)}
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </div>
))