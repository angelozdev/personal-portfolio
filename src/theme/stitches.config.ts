import { createStitches } from '@stitches/react'
import commonTheme from './common'

const stitches = createStitches({
  ...commonTheme,
  theme: {
    ...commonTheme.theme,
    colors: {
      ...commonTheme.theme.colors
    }
  }
})

export const createThemeBase = stitches.createTheme
export const styled = stitches.styled
export const css = stitches.css
export const globalCss = stitches.globalCss
export const keyframes = stitches.keyframes
export const getCssText = stitches.getCssText
export const theme = stitches.theme
export const config = stitches.config
