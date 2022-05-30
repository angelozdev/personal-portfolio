import { grayDark, blueDark, redDark } from './colors'

const darkTheme = {
  colors: {
    // semantic colors
    ...grayDark,
    ...blueDark,
    ...redDark,

    // backgrounds
    background: '$gray50'

    // texts
  }
}

export default darkTheme
