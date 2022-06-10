import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

// types
import type { VariantProps } from '@theme'

const SWITCH_HEIGHT = 1.2
const SWITCH_WIDTH = SWITCH_HEIGHT * 1.5
const MOON_DIAMETER = SWITCH_HEIGHT * 0.7

export const StyledSwitch = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: SWITCH_WIDTH + 'rem',
  height: SWITCH_HEIGHT + 'rem',
  overflow: 'hidden'
})

export const StyledSlider = styled('span', {
  $$background: '$colors$accent3',
  position: 'absolute',
  cursor: 'pointer',
  inset: '0',
  backgroundColor: '$$background',
  transition: '$base',
  borderRadius: SWITCH_HEIGHT + 'rem',
  '&:before': {
    position: 'absolute',
    content: '',
    height: SWITCH_HEIGHT + 'rem',
    width: SWITCH_HEIGHT + 'rem',
    left: '$0',
    bottom: '$0',
    backgroundColor: 'white',
    transition: '$base',
    borderRadius: '$rounded',
    border: '$space$1 solid $$background',
    zIndex: '$1'
  },
  '&:after': {
    content: '',
    position: 'absolute',
    left: '$0',
    top: '50%',
    height: MOON_DIAMETER + 'rem',
    width: MOON_DIAMETER + 'rem',
    borderRadius: '$rounded',
    transform: 'translate(0, -50%)',
    transition: '$base',
    zIndex: '0',
    opacity: 0,
    visibility: 'hidden'
  },
  variants: {
    color: { success: {} },
    isSelected: {
      true: {
        '&:before': {
          transform: `translateX(${SWITCH_WIDTH - SWITCH_HEIGHT}rem)`
        },
        '&:after': {
          transform: `translate(${SWITCH_HEIGHT / 3}rem, -50%)`,
          zIndex: '$2',
          opacity: 1,
          visibility: 'visible'
        }
      }
    }
  },
  compoundVariants: [
    {
      isSelected: true,
      color: 'success',
      css: {
        $$background: '$colors$success',
        backgroundColor: '$$background',
        '&:before': { borderColor: '$$background' },
        '&:after': { background: '$$background' }
      }
    },
    {
      isSelected: true,
      color: 'red',
      css: {
        backgroundColor: '$red400',
        '&:before': { borderColor: '$red400' },
        '&:after': { background: '$red400' }
      }
    }
  ],
  defaultVariants: {
    color: 'success',
    isSelected: false
  }
})

if (__DEV__) {
  StyledSwitch.displayName = '$Switch'
  StyledSlider.displayName = '$Slider'
}

export type SwitchVariantsProps = VariantProps<typeof StyledSlider>
