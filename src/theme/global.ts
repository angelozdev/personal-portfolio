import { globalCss } from './stitches.config'

const globalStyles = globalCss({
  body: {
    fontFamily: '$inter',
    bg: '$background',
    '::selection': {
      bg: '$blue4',
      color: '$accent1'
    }
  }
})

export default globalStyles
