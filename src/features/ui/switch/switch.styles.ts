import { styled } from '@theme'
import { __DEV__ } from '@utils/assetions'

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
  position: 'absolute',
  cursor: 'pointer',
  inset: '0',
  backgroundColor: '$gray600',
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
    border: '$space$1 solid $gray600',
    zIndex: '$1'
  },
  '&:after': {
    content: '',
    position: 'absolute',
    left: '$0',
    top: '50%',
    background: '$blue600',
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
    isSelected: {
      true: {
        backgroundColor: '$blue600',
        '&:before': {
          transform: `translateX(${SWITCH_WIDTH - SWITCH_HEIGHT}rem)`,
          borderColor: '$blue600'
        },
        '&:after': {
          transform: `translate(${SWITCH_HEIGHT / 3}rem, -50%)`,
          zIndex: '$2',
          opacity: 1,
          visibility: 'visible'
        }
      }
    }
  }
})

if (__DEV__) {
  StyledSwitch.displayName = '$Switch'
  StyledSlider.displayName = '$Slider'
}
