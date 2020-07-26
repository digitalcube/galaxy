import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import { components } from "./components"
import { colors } from "./colors"
import { type } from "./type"
export { colors, components, type }

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url("https://use.typekit.net/rrt0shs.css");

  body {
    font-family: ${type.fontFamily};
  }

  .h3 {
    font-style: ${type.headings.fontStyle};
    font-weight: ${type.headings.fontWeight};
    font-size: ${type.headings.h3.fontSize};
  }
`
