// import theme from "styled-theming"
import { colors } from "./index"

// export const themeFunction = theme(`mode`, {
//   light: `#fff`,
//   dark: `#000`,
// })

// export const themeFunction = theme(`brand`, {
//   shifter: `#fff`,
//   amimoto: `#000`,
// })

export const themes = {
  shifter: {
    colors: {
      primary: colors.magenta,
    },
  },
  amimoto: {
    colors: {
      primary: colors.blue,
    },
  },
}
