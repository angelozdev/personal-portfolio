import { styled } from '@theme'

const SWITCH_HEIGHT = 1.25
const SWITCH_WIDTH = SWITCH_HEIGHT * 1.6
const SLIDER_WIDTH = SWITCH_HEIGHT * 0.7

export const StyledSwitch = styled('label', {
  position: 'relative',
  display: 'inline-block',
  width: SWITCH_WIDTH + 'rem',
  height: SWITCH_HEIGHT + 'rem'
})

export const StyledInput = styled('input', {
  opacity: 0,
  width: '0',
  height: '0'
})

export const StyledSlider = styled('span', {
  position: 'absolute',
  cursor: 'pointer',
  inset: '0',
  backgroundColor: '$gray400',
  transition: '$base',
  borderRadius: SWITCH_HEIGHT + 'rem',
  '&:before': {
    position: 'absolute',
    content: '',
    height: SLIDER_WIDTH + 'rem',
    width: SLIDER_WIDTH + 'rem',
    left: SWITCH_HEIGHT * (0.3 / 2) + 'rem',
    bottom: SWITCH_HEIGHT * (0.3 / 2) + 'rem',
    backgroundColor: 'white',
    transition: '$base',
    borderRadius: '50%'
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: '$blue600',
        '&:before': {
          transform: `translateX(${
            SWITCH_WIDTH - SLIDER_WIDTH - SWITCH_HEIGHT * 0.3
          }rem)`
        }
      }
    }
  }
})
