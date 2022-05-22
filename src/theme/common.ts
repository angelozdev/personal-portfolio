import { defaultThemeMap as defaultStitchesThemeMap } from '@stitches/react'
import { gray } from './colors'

// types
import type { PropertyValue } from '@stitches/react'

export const defaultTokens = {
  fonts: {
    inter:
      '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif'
  },
  fontSizes: {
    tiny: '.75rem',
    xs: '0.875rem',
    base: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '2.25rem',
    xl: '3rem'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  lineHeights: {
    xs: 1,
    sm: 1.25,
    md: 1.5,
    lg: 1.625,
    xl: 1.75
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  },
  space: {
    0: '0rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '2.25rem',
    px: '1px',
    1: '0.125rem',
    2: '0.25rem',
    3: '0.375rem',
    4: '0.5rem',
    5: '0.625rem',
    6: '0.75rem',
    7: '0.875rem',
    8: '1rem',
    9: '1.25rem',
    10: '1.5rem',
    11: '1.75rem',
    12: '2rem',
    13: '2.25rem',
    14: '2.5rem',
    15: '2.75rem',
    16: '3rem',
    17: '3.5rem',
    18: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem'
  },
  radii: {
    xs: '7px',
    sm: '9px',
    md: '12px',
    base: '14px',
    lg: '14px',
    xl: '18px',
    squared: '33%',
    rounded: '50%',
    pill: '9999px'
  },
  zIndices: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    10: '1000',
    max: '9999'
  },
  borderWeights: {
    light: '1px',
    normal: '2px',
    bold: '3px',
    extrabold: '4px',
    black: '5px'
  },
  transitions: {
    base: 'all 0.3s ease'
  },
  breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  }
}

export const defaultColors = {
  // general colors
  black: '#333',
  white: '#fafafa',
  ...gray,

  // accent colors
  accents0: '$gray50',
  accents1: '$gray100',
  accents2: '$gray200',
  accents3: '$gray300',
  accents4: '$gray400',
  accents5: '$gray500',
  accents6: '$gray600',
  accents7: '$gray700',
  accents8: '$gray800',
  accents9: '$gray900'
}

export const defaultMedia = {
  xs: `(min-width: ${defaultTokens.breakpoints.xs})`,
  sm: `(min-width: ${defaultTokens.breakpoints.sm})`,
  md: `(min-width: ${defaultTokens.breakpoints.md})`,
  lg: `(min-width: ${defaultTokens.breakpoints.lg})`,
  xl: `(min-width: ${defaultTokens.breakpoints.xl})`,
  xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`,
  smMax: `(max-width: ${defaultTokens.breakpoints.sm})`,
  mdMax: `(max-width: ${defaultTokens.breakpoints.md})`,
  lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`,
  xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`,
  dark: '(prefers-color-scheme: dark)',
  light: '(prefers-color-scheme: light)'
}

export const defaultUtils = {
  p: (value: PropertyValue<'padding'>) => ({
    padding: value
  }),
  pt: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value
  }),
  pr: (value: PropertyValue<'paddingRight'>) => ({
    paddingRight: value
  }),
  pb: (value: PropertyValue<'paddingBottom'>) => ({
    paddingBottom: value
  }),
  pl: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value
  }),
  px: (value: PropertyValue<'paddingLeft'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: PropertyValue<'paddingTop'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  m: (value: PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value
  }),
  mr: (value: PropertyValue<'marginRight'>) => ({
    marginRight: value
  }),
  mb: (value: PropertyValue<'marginBottom'>) => ({
    marginBottom: value
  }),
  ml: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value
  }),
  mx: (value: PropertyValue<'marginLeft'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: PropertyValue<'marginTop'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  bg: (value: PropertyValue<'backgroundColor'>) => ({
    background: value
  }),
  w: (value: PropertyValue<'width'>) => ({ width: value }),
  h: (value: PropertyValue<'height'>) => ({ height: value })
}

export const defaultThemeMap = {
  ...defaultStitchesThemeMap,
  width: 'space',
  height: 'space',
  minWidth: 'space',
  maxWidth: 'space',
  minHeight: 'space',
  maxHeight: 'space',
  flexBasis: 'space',
  gridTemplateColumns: 'space',
  gridTemplateRows: 'space',
  borderWidth: 'borderWeights'
}

const common = {
  theme: {
    ...defaultTokens,
    colors: defaultColors
  },
  media: defaultMedia,
  utils: defaultUtils,
  themeMap: defaultThemeMap
}

export default common
