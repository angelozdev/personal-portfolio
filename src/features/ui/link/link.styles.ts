import { styled } from '@theme'
import { __DEV__ } from '@utils/assertions'

export const StyledAnchor = styled('a', {
  padding: '$2 0',
  display: 'inline-flex',
  textDecoration: 'none',
  transition: '$base',
  cursor: 'pointer',
  color: '$accent5',
  '&:hover': { color: '$accent8' },
  outline: 'none',
  variants: {
    isActive: {
      true: {
        fontWeight: '$medium',
        color: '$blue3',
        '&:hover': {
          color: '$blue4'
        }
      }
    }
  }
})

if (__DEV__) {
  StyledAnchor.displayName = '$Anchor'
}
