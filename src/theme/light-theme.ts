import { grayLight, blueLight, redLight } from './colors'

const lightTheme = {
  colors: {
    // semantic colors
    ...grayLight,
    ...blueLight,
    ...redLight,

    // backgrounds
    background: '$gray50'

    // texts
  }
}

export default lightTheme
